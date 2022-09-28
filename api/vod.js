import request from '@/utils/request'

export default {
    /**
     * 根据视频源id获取视频播放凭证
     * @param {*} videoSourceId 
     * @returns 
     */
    getPlayAuth(videoSourceId){
        return request({
            url: `/eduVod/video/get/playAuth/${videoSourceId}`,
            method: 'get'
        })

    }
}