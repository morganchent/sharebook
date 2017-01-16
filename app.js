//app.js
const AV = require('./libs/av-weapp-min.js');
const Realtime = require('./libs/realtime.weapp.min.js').Realtime;
let EBUS = require('./libs/ebus.js');

AV.init({ 
 appId: '03v0ujkW5x90FOCtkG0FjQih-gzGzoHsz', 
 appKey: 'eTKvmY6PiSYfNlVEhnDvvcwf', 
});

const realtime = new Realtime({
 appId: '03v0ujkW5x90FOCtkG0FjQih-gzGzoHsz',
 noBinary: true,
});

App({
  onLaunch: function () {
    this.getUser()
  },

  getUser:function(cb){
    var that = this
    if(this.globalData.user){
      typeof cb == "function" && cb(this.globalData.user)
    }else{
      //调用登录接口
      AV.User.loginWithWeapp().then(user => {
        wx.getUserInfo({
            success: function (res) {
              // 更新当前用户的信息
              user.set(res.userInfo).save().then(user => {
                //创建IMClient
                realtime.createIMClient(user.toJSON().nickName).then(function(IMClient){
                that.globalData.IMClient = IMClient
                IMClient.on('message', function(message, conversation) {
                  EBUS.post("recivedMsg", {message: message, conversation: conversation});
                  console.log('Message received: ' + message.text);
                });
              })
                // 成功，此时可在控制台中看到更新后的用户信息
                that.globalData.user = user.toJSON()
                typeof cb == "function" && cb(that.globalData.user)
              }).catch(console.error);
            }
          })
      }).catch(console.error);
    }
  },

  getLocation: function(lbs){
    var that = this
    if(this.globalData.lbs){
      typeof lbs == "function" && lbs(this.globalData.lbs)
    }else{
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          that.globalData.lbs = res
          typeof lbs == "function" && lbs(that.globalData.lbs)
        }
      })
    }
  },

  getIMClient: function(IMClient){
    var that = this
    if(this.globalData.IMClient){
      typeof IMClient == "function" && IMClient(this.globalData.IMClient)
    }else{
      this.getUser(function(user){
        realtime.createIMClient(user.toJSON().nickName).then(function(IMClient){
          that.globalData.IMClient = IMClient
          typeof IMClient == "function" && IMClient(that.globalData.IMClient)
        })
      })
    }
  },
  
  globalData:{
    user: null,
    lbs: null,
    IMClient: null,
  }
})