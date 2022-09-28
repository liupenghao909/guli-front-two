<template>
      <div class="cart py-container">
        <!--主内容-->
        <div class="checkout py-container  pay">
          <div class="checkout-tit">
            <h4 class="fl tit-txt"><span class="success-icon"></span><span class="success-info">订单提交成功，请您及时付款！订单号：{{payObj.out_trade_no}}</span>
            </h4>
            <span class="fr"><em class="sui-lead">应付金额：</em><em class="orange money">￥{{payObj.total_fee}}</em></span>
            <div class="clearfix"></div>
          </div>
          <div class="checkout-steps">
            <div class="fl weixin">微信支付</div>
            <div class="fl sao">
              <p class="red">请使用微信扫一扫。</p>
              <div class="fl code">
                <!-- <img id="qrious" src="~/assets/img/erweima.png" alt=""> -->
                <!-- <qriously value="weixin://wxpay/bizpayurl?pr=R7tnDpZ" :size="338"/> -->
                <qriously :value="payObj.code_url" :size="338"/>
                <div class="saosao">
                  <p>请使用微信扫一扫</p>
                  <p>扫描二维码支付</p>
                </div>

              </div>

            </div>
            <div class="clearfix"></div>
            <!-- <p><a href="pay.html" target="_blank">> 其他支付方式</a></p> -->
            
          </div>
        </div>
      </div>
</template>

<script>

    import ordersApi from '@/api/orders'

    export default {
        
        //根据订单id生成微信支付二维码
        asyncData({params, error}) {
            return ordersApi.generateWechatPaymentQR(params.pid)
                        .then(response => {
                            return {
                                payObj: response.data.data.map
                            }
                        })
        },

        data(){
            return {
                timer1:''  // 用于查询到订单状态后，清楚定时器
            }
        },

        // 在页面渲染之后执行
        mounted() {
            // 每隔3s查询一次订单状态
            this.timer1 = setInterval(() => {
                                this.queryPayStatus(this.payObj.out_trade_no)
                           },3000)
        },

        methods: {
            queryPayStatus(orderNum){
                ordersApi.getPayStatus(orderNum)
                    .then(response => {
                        // 只有订单成功，才会返回20000 
                        if(response.data.success){
                            // 清楚定时器
                            clearInterval(this.timer1)
                            // 弹窗显示支付成功
                            this.$message({
                                type: 'success',
                                message: '支付成功!'
                            })
                            // 跳转到课程详情页面
                            this.$router.push({path:'/course/'+this.payObj.course_id})
                        }
                    })
            }
        }
    }
</script>