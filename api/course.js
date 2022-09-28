import request from '@/utils/request'

export default {
    /**
     * 课程带条件的分页查询
     * @param {*} page 
     * @param {*} limit 
     * @param {*} searchObj 
     */
    getPageCourseWithCondition(page,limit,searchObj){
        return request({
            url: `/eduService/frontCourse/get/condition/pageCourse/${page}/${limit}`,
            method: 'post',
            data : searchObj
        })
    },

    /**
     * 获取分类列表
     * @returns 
     */
    getSubjectList(){
        return request({
            url: `/eduService/eduSubject/get/subject/list`,
            method: 'get'
        })
    },

    getWebCourseInfo(courseId){
        return request({
            url: `/eduService/frontCourse/get/webCourse/info/${courseId}`,
            method: 'get'
        })
    }
}