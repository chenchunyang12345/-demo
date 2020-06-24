import API from '../../api/api';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    historyList: [],
  },

  toDetail(e) {
    const { callid, phonenumber, recordpath } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../i-detail/i-detail?callId=${callid}&phoneNumber=${phonenumber}&recordPath=${recordpath}`,
    })
  },

  onSearch(e) {
    const { detail } = e;
    API.getPhoneHistory({ fromNumber: detail })
      .then(data => {
        const { list } = data;
        const formatList = list.map(item => {
          item.fromDate = item.fromDate.substr(0, item.fromDate.length - 4);
          item.thruDate = item.thruDate.substr(0, item.fromDate.length - 4);
          return item;
        })
        this.setData({
          historyList: formatList,
        })
      })
  },

  getPhoneHistory() {
    API.getPhoneHistory()
      .then(data => {
        const { list } = data;
        const formatList = list.map(item => {
          item.fromDate = item.fromDate.substr(0, item.fromDate.length - 4);
          item.thruDate = item.thruDate.substr(0, item.fromDate.length - 4);
          return item;
        })
        this.setData({
          historyList: formatList,
        })
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPhoneHistory();
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
    this.getPhoneHistory();
    this.setData({
      value: '',
    })
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