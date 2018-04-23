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
      duration: 1500
    })
    let name = e.detail.value.name
    let content = e.detail.value.content
    
    console.log(e)
    app.globalData.items.unshift({name: name, content: content})
    
  },
  onLoad: function (options) {
  
  }
})