import request from '@/utils/request'

export default {
    /**
     * 登陆
     * 
     */
    login(userLoginInfo){
        return request({
            url: `/serviceUcenter/ucenterMember/login`,
            method: 'post',
            data: userLoginInfo
        })
    },

    /**
     * 根据request header中的token获取用户信息
     * @returns 
     */
    getMemberInfo(){
        return request({
            url: `/serviceUcenter/ucenterMember/get/memberInfo`,
            method: 'get'
        })
    }
}