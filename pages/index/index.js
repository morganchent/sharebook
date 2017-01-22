//index.js

const AV = require('../../libs/av-weapp-min.js')

var app = getApp()
Page({
  data: {
    list: [
    ]
  },

  onLoad: function () {
    this.getList()
  },

  onPullDownRefresh: function () {
    this.getList()
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function () {
    return {
      title: '漫步途书',
      desc: '我正在使用“漫步途书”APP和附近的人共享书籍，一起来吧',
      path: '/pages/index/index'
    }
  },

  getList: function () {
    var that = this
    app.getLocation(function (lbs) {
      that.queryBookList(lbs)
    })
  },

  queryBookList: function (lbs) {
    wx.showNavigationBarLoading()
    var that = this
    var query = AV.Status.statusQuery();
    query.include('source');
    query.include('book');
    var point = new AV.GeoPoint(lbs.latitude, lbs.longitude);
    query.withinKilometers('whereCreated', point, 2000.0);
    query.find().then(function (results) {
      var feeds = []
      for (var i = 0; i < results.length; i++) {
        var data = results[i].attributes
        var id = results[i].id
        feeds.push({
          data: data, 
          id: id})
      }
      that.setData({
        list: feeds
      })
      wx.hideNavigationBarLoading()
    }, function (error) {
      wx.hideNavigationBarLoading()
    });
  }
})
