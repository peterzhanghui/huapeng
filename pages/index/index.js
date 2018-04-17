//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    markers: [{
      iconPath: "/assets/img/p2.png",
      id: 0,
      title: "民权县华鹏陶瓷",
      latitude: 34.645696,
      longitude: 115.170084,
      width: 30,
      height: 30,
      callout: {
        content: "民权县华鹏陶瓷总经销\n联系电话：13460116079\n地址：六合锦园南门西五十米",
        color: "#666666",
        fontSize: 12,
        borderRadius: 10,
        bgColor: "#ffffff",
        padding: 10,
        display: "ALWAYS",
        textAlign: "left"
      }
      // label: {
      //   content: "民权县华鹏陶瓷总经销\n联系电话：13460116079\n地址：六合锦园南门西四十米",
      //   color: "#666",
      //   fontSize: 12,
      //   x: -90,
      //   y: -100,
      //   borderRadius: 10,
      //   bgColor: "#fff",
      //   padding: 10,
      //   display: "ALWAYS",
      //   textAlign: "left",

      // }
    }]
  },
  markertap(e) {
    console.log(e.markerId)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
