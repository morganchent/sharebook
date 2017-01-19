//profile.js
const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    user: {},
    isMine: false
  },

  onLoad: function (options) {
    var that = this
    if (options && options.userId && options.userId != AV.User.current().id) {
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
        feeds.push({
          data: statuses[i].data, 
          id: statuses[i].id})
      }
      //增加扫码入口占位
      if(that.data.isMine){
        feeds.push({})
      }
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
