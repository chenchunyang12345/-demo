import API from '../../api/api';
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    radio1: '',
    voiceList: [],
    radio2: '',
    identityList: [],
    overlayShow: false,
  },

  onVoiceChange(e) {
    this.setData({
      radio1: e.detail
    })
    API.setVoiceStyle(e.detail)
      .then(data => {
        if (data.responseMessage === 'success') {
          wx.showToast({
            title: '设置成功',
          })
        }
      })
  },

  onChange(e) {
    this.setData({
      radio2: e.detail
    })
    API.setIdentity(e.detail)
      .then(data => {
        if (data.responseMessage === 'success') {
          wx.showToast({
            title: '设置成功',
          })
        }
      })
  },

  onListenVoice(e) {
    const { index } = e.target.dataset;
    innerAudioContext.src = this.data.voiceList[index].modelVoice;
    innerAudioContext.play();
    this.setData({ overlayShow: true });
  },

  onListen(e) {
    const { index } = e.target.dataset;
    innerAudioContext.src = this.data.identityList[index].modelVoice;
    innerAudioContext.play();
    this.setData({ overlayShow: true });
  },

  onClickHide() {
    innerAudioContext.stop();
    this.setData({ overlayShow: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置监听音频自然结束函数
    innerAudioContext.onEnded(() => {
      this.setData({
        overlayShow: false,
      })
    })
    // 获取缓存信息
    const userConfigList = wx.getStorageSync('userConfigList');
    const nowMemberId = wx.getStorageSync('nowMemberId');
    // 当前的号码配置
    const nowConfig = userConfigList.filter(item => item.memberId === nowMemberId)[0];
    const { identityId, voiceStyleId } = nowConfig;
    this.setData({
      radio1: voiceStyleId,
      radio2: identityId,
    })
    API.findIdentity()
      .then(data => {
        this.setData({
          identityList: data.list,
        })
      })
    API.findVoiceStyles()
      .then(data => {
        const current = data.list.findIndex(item => item.voiceStyleId === voiceStyleId);
        this.setData({
          voiceList: data.list,
          current,
        })
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