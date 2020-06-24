import API from './api/api.js';

App({
  onLaunch: function () {
    // // 获取code
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       登录
    //       API.login(res.code)
    //         .then(data => {
    //           console.log(data)
    //         })
    //     } else {
    //       console.log('获取code失败！' + res.errMsg)
    //     }
    //   }
    // })
    // 验证登录
    // API.checkLogin();
    // API.getUserInfo();
    // 获取会员信息
    API.getUserConf()
      .then(data => {
        const { memberId, userConfigList } = data;
        wx.setStorageSync('userConfigList', userConfigList);
        wx.setStorageSync('nowMemberId', memberId);
      })
  },
  globalData: {
      
  }
})