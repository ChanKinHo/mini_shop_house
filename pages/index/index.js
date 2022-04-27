Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[
      {
        image_src:"../../pics/banner1.png",
        id:1
      },
      {
        image_src:"../../pics/banner2.png",
        id:2
      },
      {
        image_src:"../../pics/banner3.png",
        id:3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载, 页面开始加载就会触发
   */
  onLoad: function (options) {
    //1、发送异步请求获取轮播图
    // var reqTask = wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   data: {},
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})