// pages/my/my.js
import Toast from '@vant/weapp/toast/toast';

Page({

    /**
     * 页面的初始数据
     */
    data: {
      settingList: [
        { icon: 'manager-o', text: '助理设置', url: '/pages/s-manager/s-manager' },
        { icon: 'service-o', text: '应答自定义', url: '/pages/s-answer/s-answer' },
        { icon: 'idcard', text: '企业专享', url: '/pages/s-company/s-company' },
        { icon: 'phone-o', text: '呼转设置', url: '/pages/s-call/s-call' },
        { icon: 'wap-home-o', text: '本机号码', url: '/pages/s-local/s-local' },
        { icon: 'other-pay', text: '通讯录', url: '/pages/s-addressBook/s-addressBook' },
        { icon: 'fire', text: '黑名单', url: '/pages/s-blacklist/s-blacklist' },
        { icon: 'question-o', text: '常见问题', url: '/pages/s-question/s-question' },
        { icon: 'chat-o', text: '意见反馈', url: '/pages/s-feedback/s-feedback' },
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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