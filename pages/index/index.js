//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  
  onImageClick: function() {
    wx.navigateTo({
      url: '../detail/detail?isbn=' + '7505715666'
    })
  },
  
  onScanBtnClick: function() {
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../detail/detail?isbn=' + res.result
        })
      }
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
