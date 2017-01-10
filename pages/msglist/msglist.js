//msglist.js

const AV = require('../../libs/av-weapp-min.js')

var app = getApp()
Page({
  data: {
    list: [
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

  getList: function () {
    app.getIMClient(function (IMClient) {
      IMClient.getQuery().limit(20).containsMembers([IMClient.id]).find().then(function (conversations) {
        // 默认按每个对话的最后更新日期（收到最后一条消息的时间）倒序排列
        conversations.map(function (conversation) {
          console.log(conversation)
          console.log(conversation.lastMessageAt.toString(), conversation.members);
        });
      }).catch(console.error.bind(console));
    })
  }
})
