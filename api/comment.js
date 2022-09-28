import request from '@/utils/request'

export default {
    /**
     * 课程评论分页查询
     * @param {*} courseId 
     * @returns 
     */
    getPageComment(page,limit,courseId){
        return request({
            url: `/eduService/eduComment/get/pageComment/${page}/${limit}`,
            method: 'get',
            params: {courseId}
        })

    },

    /**
     * 保存评论
     * @param {*} comment 
     * @returns 
     */
    saveComment(comment){
        return request({
            url: `/eduService/eduComment/save/comment`,
            method: 'post',
            data: comment
        })
    }
}