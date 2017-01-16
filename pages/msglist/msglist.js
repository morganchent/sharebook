
// 消息列表页
// @author feiyun

const AV = require('../../libs/av-weapp-min.js')
let EBUS = require('../../libs/ebus.js');

var app = getApp()
Page({
  data: {
    list: [
    ]
  },

  onLoad: function(){
    EBUS.register(this, "recivedMsg", this.onRecivedMsg);
  },

  onUnload: function(){
    EBUS.unRegister(this, null);
  },

  onShow: function () {
    this.getList()
  },

  onPullDownRefresh: function () {
    this.getList()
    wx.stopPullDownRefresh()
  },

  onRecivedMsg: function(){
    this.getList()
  },

  onShareAppMessage: function () {
    return {
      title: '飞鸽',
      desc: '我正在使用“飞鸽”APP和附近的人共享书籍，一起来吧',
      path: '/pages/index/index'
    }
  },

  getList: function () {
    this.setData({
      list: []
    })
    var that = this
    app.getIMClient(function (IMClient) {
      IMClient.getQuery().limit(20).containsMembers([IMClient.id]).find().then(function (conversations) {
        // 默认按每个对话的最后更新日期（收到最后一条消息的时间）倒序排列
        conversations.map(function (conversation) {
          console.log(conversation)
          that.translateConversation(conversation)
        });
        that.setData({
          list: that.data.list
        })
      }).catch(console.error.bind(console));
    })
  },

  translateConversation: function (conversation) {
    var data = {
      id: '',
      toImage: '',
      toId: '',
      toName: '',
      msgFrom: '',
      msgContent: '',
    }
    data.id = conversation.id
    data.toImage = conversation._attributes.image
    data.toId = conversation._attributes.uniqueId
    data.toName = conversation._attributes.name
    if(conversation.lastMessage){
      data.msgFrom = conversation.lastMessage.from + '：'
      data.msgContent = conversation.lastMessage._lctext
    }
    console.log(conversation)
    this.data.list.push(data)
  }
})
