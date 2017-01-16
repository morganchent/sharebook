//chat.js
const AV = require('../../libs/av-weapp-min.js');
var TextMessage = require('../../libs/realtime.weapp.min.js').TextMessage;
let EBUS = require('../../libs/ebus.js');
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
    EBUS.register(this, "recivedMsg", this.onRecivedMsg);
    var that = this
    app.getUser(function (user) {
      that.setData({
        userName: user.nickName,
        avatarUrl: user.avatarUrl
      })
      that.createConversation(options.toId, options.toName, options.toImage)
    })
  },

  onUnload: function(){
    EBUS.unRegister(this, null);
  },

  onPullDownRefresh: function () {
    this.getMessage()
    wx.stopPullDownRefresh()
  },

  createConversation: function(toId, toName, toImage){
    var that = this
    app.getIMClient(function(IMClient){
      IMClient.createConversation({
          members: [toName],
          name: toName,
          image: toImage,
          uniqueId: toId,
          unique: true
        }).then(function(conversation) {
          that.conversation = conversation
          that.getMessage()
      })
    })
  },

  onRecivedMsg: function(data){
    if(this.conversation == data.conversation){
      this.getMessage()
    }
  },

  getMessage: function(){
    this.setData({
      list: []
    })
    var that = this
    var messageIterator = this.conversation.createMessagesIterator({ limit: 10 });
    messageIterator.next().then(function(result) {
      that.parseMessage(result.value)
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
        avatarUrl: '',
        isSend: false
      }
      msg.id = message.id
      msg.from = message.from
      msg.content = message._lctext
      msg.time = message.timestamp.toJSON()
      if(message._lcattrs){
        msg.avatarUrl = message._lcattrs.avatarUrl
      }
      if(this.data.userName == message.from){
        msg.isSend = true
      }
      this.data.list.push(msg)
  }
})
