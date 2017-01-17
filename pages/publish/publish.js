//detail.js

var BOOK_INFO_API = 'https://api.douban.com/v2/book/isbn/'

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
    isBookSaved: false
  },

  onLoad: function (options) {
    this.queryBookInfo(options.isbn)
  },

  queryBookInfo: function (isbn) {
    var that = this
    wx.showNavigationBarLoading()
    var query = new AV.Query('Book')
    query.equalTo('isbn13', isbn)
    query.find().then(function (results) {
      if (results && results.length > 0) {
        wx.hideNavigationBarLoading()
        that.setData({
          bookData: results[0],
          isBookSaved: true
        })
      } else {
        that.getBookFromDouban(isbn)
      }
    }, function (error) {
      that.getBookFromDouban(isbn)
    });
  },

  getBookFromDouban: function(isbn){
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

  saveBookInfo: function () {
    var that = this
    if (this.data.isBookSaved) {
      this.saveStatus(this.data.bookData)
    } else {
      var Book = AV.Object.extend('Book')
      var book = new Book(this.data.bookData)
      book.save().then(function (book) {
        that.saveStatus(book)
      }, function (error) {
        console.error(error)
      })
    }
  },

  saveStatus: function(book){
    var feed = new AV.Status('', '这本书不错！');
    var point = new AV.GeoPoint(this.data.lbs.latitude, this.data.lbs.longitude)
    feed.set('whereCreated', point)
    feed.set('book', book)
    feed.set('address', this.data.lbs.name)
    feed.send().then(function (feed) {
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
