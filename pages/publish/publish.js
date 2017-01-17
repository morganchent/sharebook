//detail.js

var BOOK_INFO_API = 'https://api.douban.com/v2/book/isbn/'

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
  },

  onLoad: function (options) {
    this.queryBookInfo(options.isbn)
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我用“飞鸽”APP借了一本《'+this.data.bookData.title+'》',
      path: '/pages/detail/detail?isbn='+this.data.bookData.isbn10
    }
  },

  queryBookInfo: function(isbn){
    wx.showNavigationBarLoading()
    var that = this
    wx.request({
      url: BOOK_INFO_API + isbn,
      success: function(res){
        that.setData({
          bookData: res.data
        })
      },
      fail: function() {
        wx.showModal({
          content: '没有相关信息，请重试',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              wx.navigateBack()
            }
          }
        })
      },
      complete: function() {
        wx.hideNavigationBarLoading()
      }
    })
  },

  onLocationClick: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          lbs: res
        })
      }
    })
  },

  onLendClick: function () {
    if (this.data.lbs) {
      this.saveBookInfo()
    } else {
      wx.showModal({
        title: '提示',
        content: '请选择位置',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  
  onBorrowClick: function(){
    wx.redirectTo({
      url: '../chat/chat?toId='+this.data.ownerId + '&toName=' + this.data.ownerName + '&toImage=' + this.data.ownerImage
    })
  },

  saveBookInfo: function(){
    var that = this
    var Book = AV.Object.extend('Book')
    var book = new Book(this.data.bookData)
    book.save().then(function (book) {
      console.log('book is ' + book)
      that.saveStatus(book)
    }, function (error) {
      console.error(error)
    })
  },

  saveStatus: function(book){
    var feed = new AV.Status('', '这本书不错！');
    var point = new AV.GeoPoint(this.data.lbs.latitude, this.data.lbs.longitude)
    feed.set('whereCreated', point)
    feed.set('book', book)
    feed.set('address', this.data.lbs.name)
    feed.send().then(function (feed) {
      console.log('objectId is ' + feed.id)
      wx.showToast({
        title: '成功添加藏书',
        icon: 'success',
        duration: 2000
      })
      wx.navigateBack()
    }, function (error) {
      console.error(error)
    })
  }
})
