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
      },
      {
        "count": 5,
        "name": "JavaScript",
        "title": "JavaScript"
      },
      {
        "count": 3,
        "name": "Web",
        "title": "Web"
      },
      {
        "count": 3,
        "name": "计算机",
        "title": "计算机"
      },
      {
        "count": 2,
        "name": "编程",
        "title": "编程"
      },
      {
        "count": 1,
        "name": "@上图",
        "title": "@上图"
      },
      {
        "count": 1,
        "name": "阅读年份:2015",
        "title": "阅读年份:2015"
      },
      {
        "count": 1,
        "name": "越读者:主食类",
        "title": "越读者:主食类"
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
    "catalog": "第1章　MEAN简介　　 1\n1.1 三层Web应用开发　　1\n1.2 JavaScript的演进　　2\n1.3 MEAN简介　　3\n1.4 安装MongoDB　　4\n1.4.1 在Windows上安装MongoDB　　5\n1.4.2 在Mac OS X和Linux上安装MongoDB　　7\n1.4.3 使用MongoDB命令行工具　　8\n1.5 安装Node.js　　9\n1.5.1 在Windows上安装Node.js　　10\n1.5.2 在Mac OS X上安装Node.js　　11\n1.5.3 在Linux上安装Node.js 　　12\n1.5.4 运行Node.js　　12\n1.6 NPM简介　　13\n1.7 总结　　18\n第2章　Node.js入门　　19\n2.1 Node.js简介　　19\n2.1.1 JavaScript事件驱动编程　　20\n2.1.2 Node.js事件驱动编程　　22\n2.2 JavaScript闭包　　23\n2.3 Node模块　　24\n2.3.1 CommonJS模块　　24\n2.3.2 Node.js核心模块　　26\n2.3.3 Node.js第三方模块　　26\n2.3.4 Node.js文件模块　　26\n2.3.5 Node.js文件夹模块　　27\n2.4 Node.js Web应用开发　　27\n2.5 总结　　34\n第3章　使用Express开发Web应用　　35\n3.1 Express简介　　35\n3.2 Express安装　　36\n3.3 创建第一个Express应用　　36\n3.4 应用、请求和响应对象　　37\n3.4.1 应用对象　　37\n3.4.2 请求对象　　38\n3.4.3 响应对象　　38\n3.5 外部的中间件　　39\n3.6 实现MVC模式　　40\n3.7 Express应用配置　　48\n3.8 渲染视图　　51\n3.8.1 配置视图系统　　51\n3.8.2 EJS视图渲染　　53\n3.9 静态文件服务　　53\n3.10 配置会话　　55\n3.11 总结　　57\n第4章　MongoDB入门　　58\n4.1 NoSQL简介　　58\n4.2 MongoDB简介　　60\n4.3 MongoDB的关键特性　　61\n4.3.1 BSON格式　　61\n4.3.2 MongoDB即席查询　　61\n4.3.3 MongoDB索引　　62\n4.3.4 MongoDB副本集　　63\n4.3.5 MongoDB分片　　64\n4.4 MongoDB命令行工具　　65\n4.5 MongoDB数据库　　66\n4.6 MongoDB集合　　66\n4.7 MongoDB增删改查操作　　67\n4.7.1 创建新文档　　67\n4.7.2 读取文档　　68\n4.7.3 更新已有文档　　69\n4.7.4 删除文档　　70\n4.8 总结　　71\n第5章　Mongoose入门　　72\n5.1 Mongoose简介　　72\n5.1.1 安装Mongoose　　72\n5.1.2 连接MongoDB　　73\n5.2 理解Mongoose的模式　　74\n5.2.1 创建User模式与模型　　74\n5.2.2 注册USer模型　　75\n5.2.3 使用save()创建新文档　　75\n5.2.4 使用find()查找多个文档　　77\n5.2.5 使用findOne()读取单个文档　　79\n5.2.6 更新已有文档　　80\n5.2.7 删除已有文档　　81\n5.3 扩展Mongoose模式　　82\n5.3.1 定义默认值　　82\n5.3.2 使用模式修饰符　　83\n5.3.3 增加虚拟属性　　85\n5.3.4 使用索引优化查询　　85\n5.4 模型方法自定义　　86\n5.4.1 自定义静态方法　　86\n5.4.2 自定义实例方法　　87\n5.5 模型的校验　　87\n5.5.1 预定义的验证器　　87\n5.5.2 自定义的验证器　　89\n5.6 使用Mongoose中间件　　89\n5.6.1 预处理中间件　　89\n5.6.2 后置处理中间件　　90\n5.7 使用Mongoose DBRef　　90\n5.8 总结　　91\n第6章　使用Passport模块管理用户权限　　92\n6.1 Passport简介　　92\n6.1.1 安装　　92\n6.1.2 配置　　93\n6.2 理解Passport策略　　 95\n6.2.1 使用Passport的本地策略　　 95\n6.2.2 修改User模型　　 97\n6.2.3 创建身份验证视图　　 99\n6.2.4 修改用户控制器　　 101\n6.2.5 添加用户路由　　 105\n6.3 理解Passport的OAuth策略　　 107\n6.4 总结　　 118\n第7章　AngularJS入门　　 119\n7.1 AngularJS简介　　 119\n7.2 AngularJS的核心概念　　 119\n7.2.1 核心模块　　 120\n7.2.2 模块　　 120\n7.2.3 双向数据绑定　　 121\n7.2.4 依赖注入　　 122\n7.2.5 AngularJS指令　　 123\n7.2.6 AngularJS应用的引导　　 124\n7.3 安装AngularJS　　 125\n7.3.1 Bower包管理器　　 125\n7.3.2 配置Bower　　 126\n7.3.3 使用Bower安装AngularJS 　　 126\n7.3.4 配置AngularJS　　 127\n7.4 AngularJS应用的结构　　 127\n7.5 引导AngularJS应用　　 130\n7.6 AngularJS的MVC实体　　 131\n7.6.1 视图　　 132\n7.6.2 控制器和scope　　 133\n7.7 AngularJS路由　　 135\n7.7.1 安装ngRoute模块　　 136\n7.7.2 配置URL模式　　 137\n7.7.3 AngularJS应用路由　　 137\n7.8 AngularJS服务　　 139\n7.8.1 预置服务　　 139\n7.8.2 自定义服务　　 140\n7.8.3 服务的使用　　 141\n7.9 管理AngularJS的身份验证　　 141\n7.9.1 将user对象填充到视图　　 141\n7.9.2 添加身份验证服务　　 142\n7.9.3 使用身份验证服务　　 144\n7.10 总结　　144\n第8章　创建MEAN的CURD模块　　 145\n8.1 CURD模块简介　　145\n8.2 配置Express组件　　145\n8.2.1 创建Mongoose模型　　146\n8.2.2 建立Express控制器　　147\n8.2.3 编写Express路由　　152\n8.2.4 配置Express应用　　153\n8.3 ngResource模块简介　　154\n8.3.1 安装ngResource模块　　154\n8.3.2 使用$resource服务　　156\n8.4 实现AngularJS的MVC模块　　157\n8.4.1 创建模块服务　　157\n8.4.2 建立模块控制器　　158\n8.4.3 实现模块视图　　161\n8.4.4 编写AngularJS路由　　164\n8.5 最终实现　　164\n8.6 总结　　166\n第9章　基于Socket.io的实时通信　　 167\n9.1 WebSockets简介　　167\n9.2 Socket.io简介　　168\n9.2.1 Socket.io服务器端对象　　169\n9.2.2 Socket.io客户端对象　　171\n9.2.3 Socket.io的事件　　171\n9.2.4 Socket.io命名空间　　174\n9.2.5 Socket.io的房间　　175\n9.3 Socket.io的安装　　176\n9.3.1 配置Socket.io的服务器　　177\n9.3.2 配置Socket.io的会话　　178\n9.4 使用Socket.io创建聊天室　　182\n9.4.1 设置聊天服务器的事件处理程序　　182\n9.4.2 在AngularJS中创建Socket服务　　184\n9.4.3 控制器　　185\n9.4.4 视图　　186\n9.4.5 路由　　186\n9.4.6 实现　　187\n9.5 总结　　189\n第10章　MEAN应用的测试　　 190\n10.1 JavaScript测试简介　　190\n10.1.1 TDD、BDD和单元测试　　191\n10.1.2 测试框架　　192\n10.1.3 断言库　　192\n10.1.4 测试执行过程管理工具　　192\n10.2 Express应用测试　　193\n10.2.1 Mocha简介　　193\n10.2.2 Should.js简介　　194\n10.2.3 SuperTest简介　　194\n10.2.4 Mocha的安装　　195\n10.2.5 安装Should.js和SuperTest模块　　195\n10.2.6 测试环境配置　　196\n10.2.7 编写Mocha测试　　197\n10.2.8 执行Mocha测试　　201\n10.3 AngularJS应用测试　　202\n10.3.1 Jasmine框架简介　　203\n10.3.2 AngularJS单元测试　　203\n10.3.3 AngularJS E2E测试　　213\n10.4 总结　　217\n第11章　MEAN应用的调试与自动化　　 218\n11.1 构建工具Grunt　　218\n11.1.1 安装　　218\n11.1.2 Grunt的配置　　220\n11.2 使用node-inspector调试Express程序　　230\n11.2.1 使用Grunt任务安装node-inspector　　231\n11.2.2 使用Grunt任务配置node-inspector　　232\n11.2.3 使用Grunt任务运行调试　　234\n11.3 使用Batarang调试AngularJS程序　　236\n11.4 总结　　241",
    "rating": {
      "max": 10,
      "numRaters": 11,
      "average": "7.2",
      "min": 0
    },
    "author_intro": "Amos Q. Haviv\n软件工程师，技术顾问，MEAN.IO和MEAN.JS的创建者。Amos有近十年的全栈开发经验，曾就职于多个创业公司和企业。过去的三年中，Amos一直在使用JavaScript的全栈解决方案进行开发，包括Node.js和MongoDB，以及AngularJS一类的前端MVC框架。2013年，他创建了MEAN应用的第一个样板MEAN.IO，目前在www.meanjs.org继续开发MEAN解决方案。他还在各类会议上做一些Web前沿技术的演讲。此外，他还为多家公司的开发团队提供指导。"
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

  onLoad: function () {
    this.getList()
  },

  onPullDownRefresh: function(){
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

  getList: function(){
    var that = this
    app.getLocation(function(lbs){
      that.queryBookList(lbs)
    })
  },

  queryBookList: function(lbs){
    var that = this
    var query = new AV.Query('Feed');
    var point = new AV.GeoPoint(lbs.latitude, lbs.longitude);
    query.withinKilometers('whereCreated', point, 2.0);
    query.find().then(function (results) {
      if(results.length > 0){
        that.setData({
          list: results
        })
      }
    }, function (error) {
    });
  }
})
