//detail.js

var BOOK_INFO_API = 'https://api.douban.com/v2/book/isbn/'

var ADDRESS_API = 'https://api.map.baidu.com/geocoder/v2/?output=json&pois=1&ak=FD410cd97f06a78b71f4da8d2203c5c7&page_size=20&location='

const AV = require('../../libs/av-weapp.js')
var app = getApp()

Page({
  data: {
    // image: "https://img3.doubanio.com/mpic/s3294754.jpg",
    // title: "小王子",
    // url: "https://api.douban.com/v2/book/1003078",
    // subtitle: "",
    // publisher: "中国友谊出版公司",
    // isbn13: "9787505715660",
    // isbn10: "7505715666",
    // summary: "小王子驾到！大家好，我是小王子，生活在B612星球，别看我是王子出生，我要做的事也不少，有时给花浇水，有时我还得耐心地把火山口通一通。实在闷得发慌的时候，为了找些事做，学点东西，我也访问一些其他的星球，像325号、326号、327号之类的。当然，我经历的事情也不少，有开心的，也有不开心的。这些事我通常会向地球上一个叫圣埃克苏佩里的人倾诉。对了，你可不要小瞧他，他是拿但业的儿子，琐罗亚斯德的孙子。他还被人们认为尼采式的第二代法国作家。他一生有两大爱好：飞行和写作。我之所以能够这样受欢迎也是他的功劳。因为他把我在其他星球的所见所闻编成了一本小书，也就是你们即将看到的这一本。它不但被誉为有史以来阅读仅次于《圣经》的书，全球发行的语言更是超过100种。可惜的是，在这本书出版后没多久，他在一次架机执行任务时一去不复返了，没有人知道他去了哪里。今天我第一次来到中国，还希望大家同样能够喜欢我。在这本书里他收藏了很多我在其他星球的精美彩图，而且，值得一提的是，中国著名的评论家周国平先生也特意为我作序。可以说，这本书不仅小朋友们爱不释手，就连大人们也会看得如痴如醉。糟糕，我还忘了告诉你，你只有在卓越网（www.joyo.com）才能找到我。有缘的话，我们很快就能相见了。 尼采、纪德、圣埃克苏佩里是同一家庭的成员，由无可否认的联系连在一起。圣埃克苏佩里热爱尼采。纪德热爱圣埃克苏佩里。 1945年2月1日《费加罗报》上，他谈到这位飞行员：\"他无论在何处着陆，都是为了带去欢乐。\" 但是圣埃克苏佩里将公正置于友谊之上。他在《札记》中写道：\"纪德评价，却不曾体验。\"确切的见解。这是行动者面对思想者所感到的骄傲。尼采和纪德孕育了一种道德，并用美妙的文学冲动表现出来。只有圣埃克苏佩里一人在危险和充实中体验了这种道德。他是翱翔于九天的琐罗亚斯德，是乘风飞去的拿但业。他的书房便是机舱。他的格言：事事体验。他的作品：生活。圣埃克苏佩里对尼采的力量和纪德的热诚做作了合理的总结：他的冒险为职业，把写作当嗜好，他在飞行员的位置上实现着克尔桤郭尔的愿望：\"做一个思想家和做一个人，二者尽量不要区别开来，这样才是明智的。\"--（法）玛雅·戴斯特莱姆",
    // price: "19.8",
    // author: [
    //   "（法）圣埃克苏佩里"
    // ],
    // translator: [
    //   "胡雨苏"
    // ],
    // tags:[
    //   {
    //     count: 2879,
    //     name: "小王子",
    //     title: "小王子"
    //   }
    // ],
    // rating: {
    //   max: 10,
    //   numRaters: 11059,
    //   average: "9.2",
    //   min: 0
    // },
  },

  onLoad: function (options) {
    this.setData({
      isLend: options.isLend
    })
    this.queryBookInfo(options.isbn)
    var that = this
    app.getLocation(function(lbs){
      console.log(lbs)
      that.queryAddress(lbs)
    })
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我用“飞鸽”APP借了一本《'+this.data.title+'》',
      path: '/pages/detail/detail?isbn='+this.data.isbn10
    }
  },

  queryBookInfo: function(isbn){
    wx.showNavigationBarLoading()
    var that = this
    wx.request({
      url: BOOK_INFO_API + isbn,
      success: function(res){
        that.setData(res.data)
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
        that.setData({
          lbsData: res.data.result
        })
        console.log(that.data)
      },
      fail: function() {
      },
      complete: function() {
        
      }
    })
  },

  bindPickerChange: function(e) {
    var index = e.detail.value
    var address = this.data.lbsData.pois[index].name
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
    this.sendMessage()
  },

  saveBookInfo: function(){
    var Book = AV.Object.extend('Book')
    var book = new Book(this.data)
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
    feed.set('book', this.data)
    feed.set('owner', app.globalData.user)
    feed.set('address', this.data.address)
    console.log("address:", this.data.address)
    feed.save().then(function (feed) {
      console.log('objectId is ' + feed.id)
    }, function (error) {
      console.error(error)
    })
  },

  sendMessage: function(){
    var status = new AV.Status(null, 'hi，你的书能借我看看吗？');
    AV.Status.sendPrivateStatus(status, '58647b0b128fe1006bcacebc').
      then(function(status){
        //发送成功
        console.dir(status);
      }, function(err){
        //发布失败
        console.dir(err);
    });
  }
})
