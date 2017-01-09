//chat.js
const AV = require('../../libs/av-weapp-min.js');
var TextMessage = require('../../libs/realtime.weapp.min.js').TextMessage;
var app = getApp()

var conversation;

Page({
  data: {
    list: [],
    hasMoreMsg: false
  },

  onLoad: function (options) {
    this.createConversation()
  },

  createConversation: function(){
    var that = this
    app.getIMClient(function(IMClient){
      IMClient.createConversation({
          members: ['Jerry'],
          name: 'Tom & Jerry',
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
    var messageList = this.data.list
    var msg = {
      id: '',
      from: '',
      content: '',
      time: ''
    }
    for(var i=0;i<messages.length;i++)
    {
      msg.id = messages[i].id
      msg.from = messages[i].from
      msg.content = messages[i]._lctext
      msg.time = messages[i].timestamp.toJSON()
      messageList.push(msg)
    }
    this.setData({
      list: messageList
    })
    console.log(this.data.list[0])
  },
  
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  onSendBtnClick: function(){
    this.sendMessage()
  },
  

  sendMessage: function(){
    this.conversation.send(new TextMessage(this.data.inputValue)).then(function(message) {
        console.log('发送成功！', message);
      }).catch(console.error);
  }
})
