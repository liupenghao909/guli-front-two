import request from '@/utils/request'

export default {
    /**
     * 注册
     * @param {*} registerVO 
     * @returns 
     */
    register(registerVO){
        return request({
            url: `/serviceUcenter/ucenterMember/register`,
            method: 'post',
            data: registerVO
        })
    },

    /**
     * 获取手机验证码
     * @param {*} mobile 
     */
    getPhoneCode(mobile){
        return request({
            url: `/serviceMsm/api/send/message/${mobile}`,
            method: 'get'
        })
    }
}