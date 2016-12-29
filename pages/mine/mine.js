//mine.js

//获取应用实例
var app = getApp()
Page({
  data: {
    user: {}
  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUser(function(user){
      //更新数据
      that.setData({
        user:user
      })
    })
  },
})
