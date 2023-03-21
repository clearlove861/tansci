import axios from '../utils/axios'
// ==================营销=============================

/**营销列表
*@param {*} params
*@returns
**/

export function getMarketingList(params) {
    return axios.get('/tansci/marketing/getMarketingList', { params: params });
}

/**
 * 添加营销计划
 * @param {*} params
 * @returns
 */
export function marketingSave(params) {
    return axios.post('/tansci/marketing/save', params);
}

/**
 * 修改营销计划
 * @param {*} params
 * @returns
 */
export function marketingUpdate(params) {
    return axios.post('/tansci/marketing/update', params);
}

/**
 * 删除营销计划
 * @param {*} params
 * @returns
 */
export function marketingDel(params) {
    return axios.get('/tansci/marketing/del', { params: params });
}