import { get, post } from './wx-request.js';
const loginToken = '26nTrHgDpcb80WiZxGa0W-'; // 暂时固定的loginToken

const api = {
  // 1、小程序code登录
  login: code => post('/callmnCodeLogin', { code }),
  // 2、登录状态验证
  checkLogin: () => post('/callmnCheckLogin', { loginToken }),
  // 4、获取用户信息
  getUserInfo: () => post('/callmnGetUserinfo', { loginToken }),
  // 5、查询通话记录
  getPhoneHistory: params => post('/callmnFindRecordHeader', { loginToken, ...params }),
  // 6、查询通话记录详情
  findRecordDetail: callId => post('/callmnFindRecordDetail', { loginToken, callId }),
  // 11、获取会员配置
  getUserConf: () => post('/callmnGetUserConf', { loginToken }),
  // 12、查询语音风格选择项
  findVoiceStyles: () => post('/callmnFindVoiceStyles', { loginToken }),
  // 13、修改语言风格
  setVoiceStyle: voiceStyleId => post('/callmnSetVoiceStyle', { loginToken, voiceStyleId }),
  // 14、查询助理选择项
  findIdentity: () => post('/callmnFindIdentity', { loginToken }),
  // 15、修改助理身份
  setIdentity: identityId => post('/callmnSetIdentity', { loginToken, identityId }),
  // 16、修改开场白内容
  SetPrologueText: prologueText => post('/callmnSetPrologueText', { loginToken, prologueText }),
  // 17、修改开场白是否开启
  SetPrologueEnabled: prologueEnabled => post('/callmnSetPrologueEnabled', { loginToken, prologueEnabled }),
  // 18、查询自定义应答场景选择项
  findCustomScene: () => post('/callmnFindCustomScene', { loginToken }),
  // 19、修改自定义应答场景
  setCustomScene: ( customTypeId, customId ) => post('/callmnSetCustomScene', { loginToken, customTypeId, customId }),
  // 20、修改自定义应答场景是否开启
  setCustomSceneEnabled: ( customTypeId, enabled ) => post('/callmnSetCustomSceneEnabled', { loginToken, customTypeId, enabled }),
  // 22、设置呼叫转移是否开启
  setCallTransfer: ( memberId, transferTypeId, enabled ) => post('/callmnSetCallTransfer', { loginToken, memberId, transferTypeId, enabled }),
  // 27、删除一通话记录
  removeRecord: callId => post('/callmnRemoveRecord', { loginToken, callId }),
}

export default api;