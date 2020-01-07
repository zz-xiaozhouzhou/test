// pages/detail/detail.js
import {getRequestList} from '../../apis/apis';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    type: 'zzsy',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { type } = options;
    console.log(type);
    
    const url = `http://localhost:3000/movieList?type=${type}`;
    /* const _that = this;
    wx.request({
      url,
      success: (res) => {
        this.setData({ list: res.data.data });
        this.setData({ type });
      }
    }) */
     getRequestList({
       type
     }).then((res)=>{
      this.setData({ list: res.data.data });
      this.setData({ type });
     })
    wx.setNavigationBarTitle({
      title: type
    })

  },


})