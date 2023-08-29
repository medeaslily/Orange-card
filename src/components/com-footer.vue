<template>
  <footer class="footer">
    <div class="footer__content flex-box">
      <div class="connect">
        <div class="clearfix">
          <img class="fl pr6" src="../assets/img/footer/connect.png" alt="!" width="43" height="43">
          <p class="connect__phone-number">400-096-0828</p>
          <p class="connect__phone-des">7*24小时客服为您服务</p>
        </div>
        <img class="connect__qc-code pl36 mt14" src="../assets/img/footer/qrcode.png" alt="!" width="159" height="159">
        <p class="connect__qc-des pl36">微信扫描二维码，关注【橙券】</p>
      </div>
      <div class="link-box flex-box flex-btw">
        <div class="link-box__item">
          <span class="link-box__title">橙品牌</span>
          <div class="link-box__panel">
            <a href="#">橙营销</a>
            <a href="#">橙积分</a>
            <a href="#">橙金融</a>
            <a href="#">橙福利</a>
          </div>
        </div>
        <div class="link-box__item">
          <span class="link-box__title">快速入口</span>
          <div class="link-box__panel">
            <a href="#">权益平台</a>
            <a href="#">开放平台</a>
            <a href="#">供应商入驻</a>
          </div>
        </div>
        <div class="link-box__item">
          <span class="link-box__title">网站链接</span>
          <div class="link-box__panel">
            <a href="#">首页</a>
            <a href="#">橙权益</a>
            <a href="#">行业案例</a>
            <a href="#">新闻动态</a>
            <a href="#">关于我们</a>
          </div>
        </div>
        <div class="link-box__item">
          <span class="link-box__title">友情链接</span>
          <div class="link-box__panel">
            <a href="#">Decent鼎信</a>
            <a href="#">中国银联</a>
            <a href="#">中国农业银行</a>
            <a href="#">中国移动</a>
            <a href="#">中国联通</a>
          </div>
        </div>
      </div>
    </div>
    <div class="split-line"></div>
    <p class="footer__copy">&copy;2019&nbsp;&nbsp;山东鼎信网络科技有限公司&nbsp;&nbsp;鲁ICP备13023321号-25</p>
  </footer>
</template>
<script>
export default {
  name: 'com-footer'
}
</script>
<style scoped>
.pl36 {
  padding-left: 36px;
}

.pr6 {
  padding-right: 6px;
}

.fl {
  float: left;
}

.mt14 {
  margin-top: 14px;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 384px;
  background-color: #24272d;
}

.footer__content {
  box-sizing: border-box;
  justify-content: space-between;
  padding-top: 58px;
  padding-bottom: 18px;
  width: 1038px;
}

.connect {
  padding-right: 84px;
  border-right: 1px solid #4c4f5f;
}

.connect__phone-number {
  font-size: 22px;
  color: #fff;
  line-height: 22px;
}

.connect__phone-des {
  font-size: 14px;
  color: #d2d2d2;
  line-height: 26px;
}

.connect__qc-des {
  padding-top: 16px;
  font-size: 12px;
  color: #cecece;
  line-height: 12px;
}

.link-box {
  width: 654px;
}

.link-box__title {
  font-size: 16px;
  color: #fff;
  line-height: 16px;
}

.link-box__panel {
  padding-top: 32px;
}

.link-box__panel a {
  font-size: 14px;
  color: #cecece;
  line-height: 34px;
}

.split-line {
  width: 1245px;
  height: 1px;
  background-image: linear-gradient(to right,#22212f,#4c4f5f 20% 80%,#22212f);
}

.footer__copy {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 14px;
  color: #7e8088;
}

.link-box__panel a {
  display: block;
}
</style>