// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tableInfo: []
  },

  onLoad() {
    wx.request({
      url: "https://cs.zonek.cn:5000/table/",
      method: "GET",
      success: (res) => {
        console.log(res)
        this.setData({
          tableInfo: res.data
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

})
