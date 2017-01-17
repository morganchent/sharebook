//library.js

const AV = require('../../libs/av-weapp-min.js')

var app = getApp()
Page({
  data: {
    list: [
    ]
  },

  onShow: function () {
    this.getList()
  },

  onPullDownRefresh: function () {
    this.getList()
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我正在使用“飞鸽”APP和附近的人共享书籍，一起来吧',
      path: '/pages/index/index'
    }
  },

  onScanBtnClick: function () {
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../publish/publish?isbn=' + res.result
        })
      }
    })
  },

  getList: function () {
    var that = this
    var query = AV.Status.inboxQuery(AV.User.current());
    query.include('book')
    query.find().then(function(statuses){
      var feeds = []
      for (var i = 0; i < statuses.length; i++) {
        feeds.push(statuses[i].data)
        console.log(statuses[i].data)
      }
      that.setData({
        list: feeds
      })
    }, function(err){
      console.dir(err);
    });
  }
})
