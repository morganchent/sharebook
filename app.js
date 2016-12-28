//app.js
const AV = require('./libs/av-weapp.js');

AV.init({ 
 appId: '03v0ujkW5x90FOCtkG0FjQih-gzGzoHsz', 
 appKey: 'eTKvmY6PiSYfNlVEhnDvvcwf', 
});

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    this.getUserInfo()
    this.getLocation()
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
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
    userInfo:null,
    lbs: null,
  }
})