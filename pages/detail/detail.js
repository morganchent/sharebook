//detail.js

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    isMine: true
  },

  onLoad: function (options) {
    var that = this
    this.queryStatus(options.statusId)
  },

  onShareAppMessage: function () {
    return {
      title: '漫步途书',
      desc: '我用“漫步途书”APP借了一本《' + this.data.bookData.title + '》',
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
      var isMine = (status.attributes.source.toJSON().objectId == AV.User.current().id)
      console.log(that.isMine)
      that.setData({
        status: status.attributes,
        isMine: isMine})
    }, function (err) {
      console.dir(err);
    });
  },

  onBorrowClick: function () {
    var source = this.data.status.source.toJSON()
    wx.redirectTo({
      url: '../chat/chat?toId=' + source.objectId + '&toName=' + source.nickName + '&toImage=' + source.avatarUrl
    })
  },

  onOwnerImageClick: function(){
    var source = this.data.status.source.toJSON()
    wx.navigateTo({
      url: '../profile/profile?userId=' + source.objectId
    })
  }
})
