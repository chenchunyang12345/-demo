import API from '../../api/api';
const LIST = ['unconditionalTransfer', 'busyTransfer', 'noresponseTransfer', 'unreachableTransfer'];
const PHONECALLLIST = [ // 1为开启代码， 2为关闭代码
  {'1': '**21*02150920799#', '2': '##21#'},
  {'1': '**67*02150920799#', '2': '##67#'},
  {'1': '**67*02150920799#', '2': '##67#'},
  {'1': '**62*02150920799#', '2': '##62#'},
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowConfig: {},
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    show: false,
    columns: [],
  },

  onChangeNumber() {
    this.setData({
      show: true,
    })
  },

  onPickerCancel() {
    this.setData({
      show: false,
    })
  },

  onPickerConfirm(e) {
    const { value, index } = e.detail;
    console.log(value)
  },

  onChange(e) {
    const { detail } = e;
    const { id } = e.target.dataset;
    const { memberId } = this.data.nowConfig;
    API.setCallTransfer(memberId, LIST[id - 1], detail ? 'Y' : 'N');
    this.setData({
      [`checked${id}`]: detail
    })
    // 拨电话代码
    wx.makePhoneCall({
      phoneNumber: PHONECALLLIST[id - 1][detail ? '1' : '2']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取缓存信息
    const userConfigList = wx.getStorageSync('userConfigList');
    const nowMemberId = wx.getStorageSync('nowMemberId');
    // 当前的号码配置
    const nowConfig = userConfigList.filter(item => item.memberId === nowMemberId)[0];
    const { unconditionalTransfer, busyTransfer, noresponseTransfer, unreachableTransfer } = nowConfig;
    // 获取所有号码
    const numberList = userConfigList.map(item => item.mobilePhone);
    this.setData({
      nowConfig,
      checked1: unconditionalTransfer === 'Y' ? true : false,
      checked2: busyTransfer === 'Y' ? true : false,
      checked3: noresponseTransfer === 'Y' ? true : false,
      checked4: unreachableTransfer === 'Y' ? true : false,
      columns: numberList,
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