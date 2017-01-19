//mine.js

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
  },

  onLoad: function (options) {
    this.setData({
      user: AV.User.current()
    })
  },

  onAboutClick: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },

  onLibraryClick: function () {
    wx.navigateTo({
      url: '../profile/profile'
    })
  },
})
