// 请求的base地址
const BASE_URL = 'https://vcom.club/paas/control/RESTService';

// 定义请求方法
function request(method, url, data, header = { 'Content-Type': 'application/json' }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header,
      success: res => {
        if (!res.data.responseMessage || res.data.responseMessage === 'error') {
          reject('查询失败');
          wx.showToast({
            title: '操作失败',
            icon: 'none',
          })
        }
        resolve(res.data);
      },
      fail: err => {
        wx.showToast({
          title: '操作失败',
          icon: 'none',
        })
        reject(err);
      }
    })
  })
}

// 暴露两个请求函数
export const get = (url, data, header) => request('GET', url, data, header);
export const post = (url, data, header) => request('POST', url, data, header);