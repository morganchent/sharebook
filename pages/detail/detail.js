//detail.js

var BOOK_INFO_API = 'https://api.douban.com/v2/book/isbn/'

var ADDRESS_API = 'https://apis.map.qq.com/ws/geocoder/v1/?key=VQTBZ-5XWKV-ANIP2-UJELU-SEFKH-Y2F6U&get_poi=1&coord_type=1&poi_options=address_format=short;radius=2000;page_size=50;page_index=1;category=大学,中学,商务楼宇&location='

const AV = require('../../libs/av-weapp-min.js')
var app = getApp()

Page({
  data: {
  },

  onLoad: function (options) {
    var that = this
    this.setData({
      isLend: options.isLend,
      owner: options.owner
    })
    this.queryBookInfo(options.isbn)
    if(options.isLend == 1){
      app.getLocation(function (lbs) {
        that.queryAddress(lbs)
      })
    }
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

  queryAddress: function(lbs){
    var that = this
    wx.request({
      url: ADDRESS_API + lbs.latitude + ',' + lbs.longitude,
      success: function(res){
        var pois = res.data.result.pois
        if(pois.length >0){
          //默认选择第0个poi
          var index = 0
          var address = pois[index].title
          that.setData({
            lbsData: pois,
            index: index,
            address: address
          })
        }
      },
      fail: function() {
      },
      complete: function() {
        
      }
    })
  },

  bindPickerChange: function(e) {
    var index = e.detail.value
    var address = this.data.lbsData[index].title
    this.setData({
      index: index,
      address: address
    })
  },

  // onLocationClick: function(){
  //   var that = this
  //   wx.chooseLocation({
  //     success: function(res) {
  //       app.globalData.lbs = res
  //       console.log(app.globalData.lbs)
  //     }
  //   })
  // },

  onLendClick: function(){
    // this.saveBookInfo()
    this.saveStatus()
  },
  
  onBorrowClick: function(){
    // this.sendMessage()
    wx.navigateTo({
      url: '../chat/chat?toId='+this.data.owner
    })
  },

  saveBookInfo: function(){
    var Book = AV.Object.extend('Book')
    var book = new Book(this.data.bookData)
    book.save().then(function (book) {
      console.log('objectId is ' + book.id)
    }, function (error) {
      console.error(error)
    })
  },

  saveStatus: function(){
    var Feed = AV.Object.extend('Feed')
    var feed = new Feed()
    var point = new AV.GeoPoint(app.globalData.lbs.latitude, app.globalData.lbs.longitude)
    feed.set('whereCreated', point)
    feed.set('book', this.data.bookData)
    feed.set('owner', app.globalData.user)
    feed.set('address', this.data.address)
    feed.save().then(function (feed) {
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
