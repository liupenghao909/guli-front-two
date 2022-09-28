import request from '@/utils/request'

export default {
    // 生成订单数据保存到数据库中
    generateOrder(courseId){
        return request({
            url: `/serviceOrder/order/generate/order/${courseId}`,
            method: 'get'
        })
    },
    // 根据订单编号获取订单信息
    getOrderInfo(orderId){
        return request({
            url: `/serviceOrder/order/get/orderInfo/${orderId}`,
            method: 'get'
        })
    },
    // 生成支付二维码
    generateWechatPaymentQR(orderNum){
        return request({
            url: `/serviceOrder/payLog/generate/paymentQR/${orderNum}`,
            method: 'get'
        })
    },
    // 查询订单状态
    getPayStatus(orderNum){
        return request({
            url: `/serviceOrder/payLog/get/pay/status/${orderNum}`,
            method: 'get'
        })
    }

}