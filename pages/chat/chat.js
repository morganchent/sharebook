//chat.js
const AV = require('../../libs/av-weapp-min.js');
var TextMessage = require('../../libs/realtime.weapp.min.js').TextMessage;
var app = getApp()

var conversation;

Page({
  data: {
    list: [],
    hasMoreMsg: false,
    avatarUrl: '',
    textIsEmpty: true
  },

  onLoad: function (options) {
    console.log('options', options)
    var that = this
    app.getUser(function (user) {
      that.setData({
        userName: user.nickName,
        avatarUrl: user.avatarUrl
      })
      that.createConversation(options.toId)
    })
  },

  createConversation: function(toId){
    var that = this
    app.getIMClient(function(IMClient){
      IMClient.createConversation({
          members: [toId],
          name: that.data.userName + '&' + toId,
          unique: true,
        }).then(function(conversation) {
          that.conversation = conversation
          that.getMessage()
      })
    })
  },

  getMessage: function(){
    var that = this
    // 创建一个迭代器，每次获取 10 条历史消息
    var messageIterator = this.conversation.createMessagesIterator({ limit: 10 });
    // 第一次调用 next 方法，获得前 10 条消息，还有更多消息，done 为 false
    messageIterator.next().then(function(result) {
      that.parseMessage(result.value)
      // result: {
      //   value: [message1, ..., message10],
      //   done: false,
      // }
    }).catch(console.error.bind(console));
    // 第二次调用 next 方法，获得第 11 ~ 20 条消息，还有更多消息，done 为 false
    messageIterator.next().then(function(result) {
      // result: {
      //   value: [message11, ..., message20],
      //   done: false,
      // }
    }).catch(console.error.bind(console));
    // 第二次调用 next 方法，获得第 21 条消息，没有更多消息，done 为 true
    messageIterator.next().then(function(result) {
      // No more messages
      // result: { value: [message21], done: true }
    }).catch(console.error.bind(console));
  },

  parseMessage: function(messages){
    for(var i=0;i<messages.length;i++)
    {
      this.translateMsg(messages[i])
    }
    this.setData({
      list: this.data.list
    })
  },
  
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value,
      textIsEmpty: (e.detail.value == '')
    })
  },

  onSendBtnClick: function(){
    this.sendMessage()
  },
  

  sendMessage: function(){
    if(this.data.inputValue && this.data.inputValue != ''){
      var that = this
      var msg = new TextMessage(this.data.inputValue)
      msg._lcattrs = {avatarUrl: this.data.avatarUrl}
      this.conversation.send(msg).then(function(message) {
          console.log('发送成功！', message);
          that.translateMsg(message)
          that.setData({
            list: that.data.list
          })
        }).catch(console.error);
    }else{
      wx.showToast({
        title: '输入不能为空',
        duration: 1000
      })
    }
  },

  translateMsg: function(message){
    var msg = {
        id: '',
        from: '',
        content: '',
        time: '',
        avatarUrl: ''
      }
      msg.id = message.id
      msg.from = message.from
      msg.content = message._lctext
      msg.time = message.timestamp.toJSON()
      if(message._lcattrs){
        msg.avatarUrl = message._lcattrs.avatarUrl
      }
      this.data.list.push(msg)
  }
})
