import API from '../../api/api';
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prologueText: '机主的智能助理',
    dialogText: '机主的智能助理',
    checkedHi: false,
    dialogShow: false,
    checked1: false,
    radio1: "_NA_",
    checked2: false,
    radio2: "_NA_",
    checked3: false,
    radio3: "_NA_",
    meetingShow: false,
  },

  changeWords() {
    this.setData({
      dialogText: this.data.prologueText,
      dialogShow: true,
    })
  },

  onDialogClose() {
    this.setData({
      dialogShow: false,
    })
  },

  onDialogConfirm() {
    let newText = this.data.dialogText;
    API.SetPrologueText(newText);
    this.setData({
      prologueText: newText,
      dialogShow: false,
    })
  },

  onInputChange(e) {
    const { detail } = e;
    this.setData({
      dialogText: detail,
    })
  },

  onHiChange(e) {
    API.SetPrologueEnabled(e.detail ? 'Y' : 'N');
    this.setData({ checkedHi: e.detail });
  },

  onSwitchChange1(e) {
    API.setCustomSceneEnabled('CALLMN_CSCENE_TYPE', e.detail ? 'Y' : 'N');
    this.setData({ checked1: e.detail });
  },

  onSwitchChange2(e) {
    API.setCustomSceneEnabled('CALLMN_EXPRESS_TYPE', e.detail ? 'Y' : 'N');
    this.setData({ checked2: e.detail });
  },

  onSwitchChange3(e) {
    API.setCustomSceneEnabled('CALLMN_WAIMAI_TYPE', e.detail ? 'Y' : 'N');
    this.setData({ checked3: e.detail });
  },

  onRadioChange1(e) {
    if (!this.data.checked1) {
      wx.showToast({
        title: '请先开启开关',
        icon: 'none'
      })
      return;
    }
    API.setCustomScene('CALLMN_CSCENE_TYPE', e.detail);
    this.setData({
      radio1: e.detail,
    });
  },

  onRadioChange2(e) {
    if (!this.data.checked2) {
      wx.showToast({
        title: '请先开启开关',
        icon: 'none'
      })
      return;
    }
    API.setCustomScene('CALLMN_EXPRESS_TYPE', e.detail);
    this.setData({
      radio2: e.detail,
    });
  },

  onRadioChange3(e) {
    if (!this.data.checked3) {
      wx.showToast({
        title: '请先开启开关',
        icon: 'none'
      })
      return;
    }
    API.setCustomScene('CALLMN_WAIMAI_TYPE', e.detail);
    this.setData({
      radio3: e.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 场景的设置信息
    API.findCustomScene()
      .then(data => {
        const { list } = data;
        this.setData({
          radio1: list[0].customId,
          radio2: list[1].customId,
          radio3: list[2].customId,
          checked1: list[0].enabled === "Y" ? true : false,
          checked2: list[1].enabled === "Y" ? true : false,
          checked3: list[2].enabled === "Y" ? true : false,
        })
      })
    // 拿到开场设置相关信息
    const userConfigList = wx.getStorageSync('userConfigList');
    const nowMemberId = wx.getStorageSync('nowMemberId');
    const nowConfig = userConfigList.filter(item => item.memberId === nowMemberId)[0];
    const { prologueText, prologueEnabled } = nowConfig;
    this.setData({
      checkedHi: prologueEnabled === 'Y' ? true : false,
      dialogText: prologueText,
      prologueText,
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