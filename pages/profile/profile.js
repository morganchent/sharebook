//profile.js
const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    user: {},
    isMine: false
  },

  onShow: function () {
    this.getList()
  },

  onLoad: function (options) {
    var that = this
    if (options && options.userId && options.userId != AV.User.current().id) {
      var query = new AV.Query('_User');
      query.get(options.userId).then(function (user) {
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
    }
  },

  onShareAppMessage: function () {
    return {
      title: '漫步途书',
      desc: '我正在使用“漫步途书”APP和附近的人共享书籍，来看看我的藏书吧！',
      path: '/pages/profile/profile?userId='+ this.data.user.id
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
