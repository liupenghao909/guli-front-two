import request from '@/utils/request'

export default {
    /**
     * 获取热门课程和热门讲师列表
     * 
     * @returns 
     */
    getHotCourseTeacherList(){
        return request({
            url: `/eduService/front/get/teacherAndTeacher`,
            method: 'get'
        })
    }
}