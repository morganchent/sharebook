//app.js
const AV = require('./libs/av-weapp-min.js');
const Realtime = require('./libs/realtime.weapp.min.js').Realtime;

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
  
  globalData:{
    user: null,
    lbs: null,
  }
})