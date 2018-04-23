// pages/post/post.js

const app = getApp()

Page({

  data: {
  
  },
  // Bind Submit
  bindSubmit: function (e) {
 
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1000
    })
    let name = e.detail.value.name
    let content = e.detail.value.content
    
    console.log(e)
    app.globalData.items.unshift({name: name, content: content})
    

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)

  },
  onLoad: function (options) {
  
  }
})