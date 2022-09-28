import request from '@/utils/request'

export default {
    /**
     * 获取bannerList
     * 
     * @returns 
     */
    getBannerList(){
        return request({
            url: `/serviceCms/bannerFront/get/allBanner`,
            method: 'get'
        })
    }
}