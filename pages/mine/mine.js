//mine.js
const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    user: {}
  },
  onLoad: function (options) {
    var that = this
    app.getUser(function(user){
      that.setData({
        user:user
      })
      that.getList()
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
      }
      feeds.push({})
      that.setData({
        list: feeds
      })
      console.log(that.data.list)
    }, function(err){
      console.dir(err);
    });
  },

  onAboutClick: function () {
    wx.navigateTo({
      url: '../about/about'
    })
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
})
