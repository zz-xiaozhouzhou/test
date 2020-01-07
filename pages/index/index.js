//index.js
//获取应用实例
Page({
  data: {
    background: [`https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.webp`,
      `https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.webp`,
      `https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp`],
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  goToList(e) {
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?type=${type}`
    })
  }
})
