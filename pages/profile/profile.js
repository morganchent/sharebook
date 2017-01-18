//mine.js
const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    user: {},
    isMine: false
  },

  onLoad: function (options) {
    var that = this
    if (options && options.userId && options.userId != AV.User.current().objectId) {
      var query = new AV.Query('_User');
      query.get(options.userId).then(function (user) {
        console.log(user)
        that.setData({
          user: user,
          isMine: false
        })
        that.getList()
      }, function (error) {
        // 异常处理
      });
    } else {
      this.setData({
        user: AV.User.current(),
          isMine: true
      })
      this.getList()
    }
  },

  getList: function () {
    var that = this
    var query = AV.Status.inboxQuery(this.data.user);
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
