//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    list: [
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
      {
        image: "https://img3.doubanio.com/mpic/s3294754.jpg",
        title: "小王子",
        url: "https://api.douban.com/v2/book/1003078",
        author: "",
        price: "",
        price: "19.8",
        author: [
          "（法）圣埃克苏佩里"
        ],
        rating: {
          max: 10,
          numRaters: 11059,
          average: "9.2",
          min: 0
        }
      },
    ]
  },
  
  onScanBtnClick: function() {
    wx.navigateTo({
      url: '../detail/detail?isbn=7505715666'
    })
    // wx.scanCode({
    //   success: (res) => {
    //     wx.navigateTo({
    //       url: '../detail/detail?isbn=' + res.result
    //     })
    //   }
    // })
  },
  onLoad: function () {
  }
})
