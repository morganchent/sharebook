//chat.js
const AV = require('../../libs/av-weapp-min.js');
const Realtime = require('../../libs/realtime.weapp.min.js').Realtime;

const realtime = new Realtime({
 appId: '03v0ujkW5x90FOCtkG0FjQih-gzGzoHsz',
 noBinary: true,
});

Page({
  data: {
  },

  onLoad: function (options) {
    this.sendMessage()
  },

  sendMessage: function(){
    // Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
    realtime.createIMClient('Tom').then(function(tom) {
      // 创建与Jerry之间的对话
      return tom.createConversation({
        members: ['Jerry'],
        name: 'Tom & Jerry',
      });
    }).then(function(conversation) {
      // 发送消息
      return conversation.send(new AV.TextMessage('耗子，起床！'));
    }).then(function(message) {
      console.log('Tom & Jerry', '发送成功！');
    }).catch(console.error);

    // var status = new AV.Status(null, 'hi，你的书能借我看看吗？');
    // AV.Status.sendPrivateStatus(status, '58647b0b128fe1006bcacebc').
    //   then(function(status){
    //     //发送成功
    //     console.dir(status);
    //   }, function(err){
    //     //发布失败
    //     console.dir(err);
    // });
  }
})
