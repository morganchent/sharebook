//index.js

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
          "author_intro": "Amos Q. Haviv\n软件工程师，技术顾问，MEAN.IO和MEAN.JS的创建者。Amos有近十年的全栈开发经验，曾就职于多个创业公司和企业。过去的三年中，Amos一直在使用JavaScript的全栈解决方案进行开发，包括Node.js和MongoDB，以及AngularJS一类的前端MVC框架。2013年，他创建了MEAN应用的第一个样板MEAN.IO，目前在www.meanjs.org继续开发MEAN解决方案。他还在各类会议上做一些Web前沿技术的演讲。此外，他还为多家公司的开发团队提供指导。"
        },
        "owner": {
          "objectId": "586b311c1b69e6006b56492b",
          "nickName": "Tom",
          "gender": 1,
          "language": "zh_CN",
          "city": "Chaoyang",
          "province": "Beijing",
          "country": "CN",
          "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5F2yrVGmHB5PbZZb7s3BWrdcabxoDn7hiaHkdYKD2yG2iccZdcBqGBpAheOxbMCL0LLs0vMBZJymbQ/0"
        },
        address: '望京SOHO'
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
          "author_intro": "Amos Q. Haviv\n软件工程师，技术顾问，MEAN.IO和MEAN.JS的创建者。Amos有近十年的全栈开发经验，曾就职于多个创业公司和企业。过去的三年中，Amos一直在使用JavaScript的全栈解决方案进行开发，包括Node.js和MongoDB，以及AngularJS一类的前端MVC框架。2013年，他创建了MEAN应用的第一个样板MEAN.IO，目前在www.meanjs.org继续开发MEAN解决方案。他还在各类会议上做一些Web前沿技术的演讲。此外，他还为多家公司的开发团队提供指导。"
        },
        "owner": {
          "objectId": "586b311c1b69e6006b56492b",
          "nickName": "Tom",
          "gender": 1,
          "language": "zh_CN",
          "city": "Chaoyang",
          "province": "Beijing",
          "country": "CN",
          "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM5F2yrVGmHB5PbZZb7s3BWrdcabxoDn7hiaHkdYKD2yG2iccZdcBqGBpAheOxbMCL0LLs0vMBZJymbQ/0"
        },
        address: '望京SOHO'
      }
    ]
  },

  onLoad: function () {
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

  getList: function () {
    var that = this
    app.getLocation(function (lbs) {
      that.queryBookList(lbs)
    })
  },

  queryBookList: function (lbs) {
    var that = this
    var query = new AV.Query('Feed');
    var point = new AV.GeoPoint(lbs.latitude, lbs.longitude);
    query.withinKilometers('whereCreated', point, 2.0);
    query.find().then(function (results) {
      if (results.length > 0) {
        that.setData({
          list: results
        })
      }
    }, function (error) {
    });
  }
})
