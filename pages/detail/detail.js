//detail.js

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
  },

  onLoad: function (options) {
    var that = this
    this.queryStatus(options.statusId)
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我用“飞鸽”APP借了一本《' + this.data.bookData.title + '》',
      path: '/pages/detail/detail?statusId=' + this.data.bookData.isbn10
    }
  },

  queryStatus: function (statusId) {
    wx.showNavigationBarLoading()
    var that = this
    var query = AV.Status.statusQuery()
    query.include('source');
    query.include('book');
    query.get(statusId).then(function (status) {
      wx.hideNavigationBarLoading()
      that.setData(status.attributes)
    }, function (err) {
      console.dir(err);
    });
  },

  onBorrowClick: function () {
    var source = this.data.source.toJSON()
    wx.redirectTo({
      url: '../chat/chat?toId=' + source.objectId + '&toName=' + source.nickName + '&toImage=' + source.avatarUrl
    })
  },
})
