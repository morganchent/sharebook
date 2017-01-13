//library.js

const AV = require('../../libs/av-weapp-min.js')

var app = getApp()
Page({
  data: {
    list: [
      {
        "whereCreated": {
          "__type": "GeoPoint",
          "latitude": 39.99483,
          "longitude": 116.4748
        },
        "book": {
          "tags": [
            {
              "count": 7,
              "name": "MEAN",
              "title": "MEAN"
            }
          ],
          "alt_title": "",
          "pubdate": "2015-7",
          "publisher": "人民邮电出版社",
          "alt": "https://book.douban.com/subject/26462889/",
          "images": {
            "small": "https://img5.doubanio.com/spic/s28147486.jpg",
            "large": "https://img5.doubanio.com/lpic/s28147486.jpg",
            "medium": "https://img5.doubanio.com/mpic/s28147486.jpg"
          },
          "isLend": "0",
          "isbn13": "9787115396631",
          "title": "MEAN Web开发",
          "pages": "256",
          "author": [
            "[以色列] Amos Q. Haviv"
          ],
          "summary": "MEAN 是最流行的Web 开发工具的集合，包括MongoDB、Express、AngularJS 和Node.js。本书从 MEAN 的核心框架开始，详细阐述了每一种框架的关键概念，如何正确地设置它们，以及如何用流行的模 块把它们连接在一起。通过本书的实例练习，你能搭建自己的MEAN 应用架构，通过添加认证层，开发 MVC 架构支持自己的项目开发。最后，你将学会使用不同的工具和框架加快你的日常开发进程。",
          "binding": "平装",
          "id": "26462889",
          "subtitle": "",
          "translator": [
            "陈世帝"
          ],
          "origin_title": "",
          "url": "https://api.douban.com/v2/book/26462889",
          "image": "https://img5.doubanio.com/mpic/s28147486.jpg",
          "isbn10": "7115396639",
          "price": "59.00元",
          "catalog": "",
          "rating": {
            "max": 10,
            "numRaters": 11,
            "average": "7.2",
            "min": 0
          },
        },
        "owner": {
          "nickName": "Tao",
          "gender": 1,
          "language": "zh_CN",
          "city": "Chaoyang",
          "province": "Beijing",
          "country": "CN",
          "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5F2yrVGmHB5PbZZb7s3BWrdcabxoDn7hiaHkdYKD2yG2iccZdcBqGBpAheOxbMCL0LLs0vMBZJymbQ/0"
        },
        "ACL": {
          "*": {
            "read": true,
            "write": true
          }
        },
        "objectId": "58635a34128fe1006d093e2f",
        "createdAt": "2016-12-28T06:22:44.871Z",
        "updatedAt": "2016-12-28T06:22:44.871Z"
      },
      {
        "whereCreated": {
          "__type": "GeoPoint",
          "latitude": 39.99483,
          "longitude": 116.4748
        },
        "book": {
          "tags": [
            {
              "count": 7,
              "name": "MEAN",
              "title": "MEAN"
            }
          ],
          "alt_title": "",
          "pubdate": "2015-7",
          "publisher": "人民邮电出版社",
          "alt": "https://book.douban.com/subject/26462889/",
          "images": {
            "small": "https://img5.doubanio.com/spic/s28147486.jpg",
            "large": "https://img5.doubanio.com/lpic/s28147486.jpg",
            "medium": "https://img5.doubanio.com/mpic/s28147486.jpg"
          },
          "isLend": "0",
          "isbn13": "9787115396631",
          "title": "MEAN Web开发",
          "pages": "256",
          "author": [
            "[以色列] Amos Q. Haviv"
          ],
          "summary": "MEAN 是最流行的Web 开发工具的集合，包括MongoDB、Express、AngularJS 和Node.js。本书从 MEAN 的核心框架开始，详细阐述了每一种框架的关键概念，如何正确地设置它们，以及如何用流行的模 块把它们连接在一起。通过本书的实例练习，你能搭建自己的MEAN 应用架构，通过添加认证层，开发 MVC 架构支持自己的项目开发。最后，你将学会使用不同的工具和框架加快你的日常开发进程。",
          "binding": "平装",
          "id": "26462889",
          "subtitle": "",
          "translator": [
            "陈世帝"
          ],
          "origin_title": "",
          "url": "https://api.douban.com/v2/book/26462889",
          "image": "https://img5.doubanio.com/mpic/s28147486.jpg",
          "isbn10": "7115396639",
          "price": "59.00元",
          "catalog": "",
          "rating": {
            "max": 10,
            "numRaters": 11,
            "average": "7.2",
            "min": 0
          },
        },
        "owner": {
          "nickName": "Tao",
          "gender": 1,
          "language": "zh_CN",
          "city": "Chaoyang",
          "province": "Beijing",
          "country": "CN",
          "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5F2yrVGmHB5PbZZb7s3BWrdcabxoDn7hiaHkdYKD2yG2iccZdcBqGBpAheOxbMCL0LLs0vMBZJymbQ/0"
        },
        "ACL": {
          "*": {
            "read": true,
            "write": true
          }
        },
        "objectId": "58635a34128fe1006d093e2f",
        "createdAt": "2016-12-28T06:22:44.871Z",
        "updatedAt": "2016-12-28T06:22:44.871Z"
      }
    ]
  },

  onShow: function () {
    this.getList()
  },

  onPullDownRefresh: function () {
    this.getList()
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我正在使用“飞鸽”APP和附近的人共享书籍，一起来吧',
      path: '/pages/index/index'
    }
  },

  onScanBtnClick: function () {
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../detail/detail?isLend=1&isbn=' + res.result
        })
      }
    })
  },

  getList: function () {
    var that = this
    var query = new AV.Query('Feed');
    query.equalTo('ownerId', app.globalData.user.objectId);
    query.find().then(function (results) {
      var feeds = []
      for (var i = 0; i < results.length; i++) {
        feeds.push(results[i].attributes)
      }
      that.setData({
        list: feeds
      })
    }, function (err) {
      //查询失败
      console.dir(err);
    });
  }
})
