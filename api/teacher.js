import request from '@/utils/request'

export default {
    /**
     * 获取讲师分页数据
     * @param {*} page 
     * @param {*} limit 
     */
    getTeacherList(page,limit){
        return request({
            url: `/eduService/frontTeacher/get/teacherList/${page}/${limit}`,
            method: 'get'
        })
    },

    /**
     * 获取讲师详情页面相关信息
     * @param {*} teacherId 
     */
    getTeacherInfo(teacherId){
        return request({
            url: `/eduService/frontTeacher/get/teacherAndCourseInfo/${teacherId}`,
            method: 'get'
        })
    }
}