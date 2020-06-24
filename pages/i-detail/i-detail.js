import API from '../../api/api';
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    callId: '',
    detaileList: [],
    phoneNumber: '',
    recordPath: '',
    overlayShow: false,
  },

  onPlayRecord() {
    this.setData({
      overlayShow: true,
    })
    innerAudioContext.play();
  },

  onClickHide() {
    this.setData({
      overlayShow: false,
    })
    innerAudioContext.stop();
  },

  onCallback() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
    })
  },

  onDelete() {
    wx.showModal({
      title: '提示',
      content: '确定要删除吗',
      success: res => {
        if (res.confirm) {
          console.log('用户点击确定')
          const { callId } = this.data;
          API.removeRecord(callId)
            .then(data => {
              wx.navigateBack();
            })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { callId, phoneNumber, recordPath } = options;
    innerAudioContext.src = recordPath;
    // 设置监听音频自然结束函数
    innerAudioContext.onEnded(() => {
      this.setData({
        overlayShow: false,
      })
    })
    // 获取通话详情
    API.findRecordDetail(callId)
      .then(data => {
        console.log(data)
        this.setData({
          detaileList: data.list,
          callId,
          phoneNumber,
          recordPath,
        })
      })
    // 动态设置title
    wx.setNavigationBarTitle({
      title: phoneNumber,
    })
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