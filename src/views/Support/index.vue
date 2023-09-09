<template>
  <div class="support">
    <div class="support__banner">
      <h2>供应商合作</h2>
      <p>橙券诚邀您的加入，更高效的合作方式，更尖端的技术接入</p>
      <p>我们期待与您携手前行共创未来</p>
    </div>
    <!--  入驻流程  -->
    <div class="flow">
      <h3>入驻流程</h3>
      <!--  示意图   -->
      <ul class="flow__map">
        <li class="flow__map-item"
            v-for="(text, idx) in flowData"
            :key="idx"
            :style="setBgiVars(idx)">
          <span>{{ text }}</span>
        </li>
      </ul>
    </div>
    <!--  入驻申请  -->
    <div class="join">
      <h3>入驻申请</h3>
      <form :module="msgForm">
        <input type="text" name="" placeholder="您的姓名" v-model="msgForm.name">
        <input type="text" placeholder="您的手机号码" v-model="msgForm.phone">
        <input type="text" placeholder="您要供应的资源" v-model="msgForm.resource">
        <input type="submit" value="提交信息" @click.prevent="subMit(msgForm)">
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'support-page',
  data() {
    return {
      flowData: ['填写信息', '商务联系', '洽谈资源', '签约合作'],
      msgForm: {
        name: '',
        phone: '',
        resource: '',
      }
    }
  },
  computed: {
    setBgiVars() {
      return (idx) => {
        return {
          '--bgi': `url(${require(`@/assets/img/support/flow/${ this.$tool.padZero(idx) }.png`)})`
        }
      }
    }
  },
  methods: {
    async subMit(data) {
      // 提交审查
      if (!data.name || !data.phone || !data.resource) {
        this.$alert('请输入完整表单信息', '提示', {
          type: 'warning'
        })
        return false
      }

      // 提交数据
      try {
        let  res = await this.$api.subApplication(this.msgForm)
        console.log(res.data)
        this.msgForm = {
          name: '',
          phone: '',
          resource: '',
        }
        this.$alert('提交成功', '提示', {
          type: 'success'
        })
      } catch (err) {
        console.log(err)
        this.$alert('提交失败', '提示', {
          type: 'error'
        })
      }
    }
  },
}
</script>
<style lang="scss" scoped>
h3 {
  @include same-fs-lh(30px);
  font-weight: 400;
}

.support {
  margin-top: $header-height;
}

.support__banner {
  height: 380px;
  color: #fff;
  background-image: url('@/assets/img/support/banner.jpg');
  @include pad-bgi;

  h2 {
    padding-top: 116px;
    padding-bottom: 19px;
    @include same-fs-lh(44px);
    font-weight: 400;
    text-align: center;
  }

  p {
    font-size: 22px;
    line-height: 36px;
    text-align: center;
  }
}

.flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 88px;
  padding-bottom: 127px;
  height: 495px;

  h3 {
    padding-bottom: 233px;
  }
}

.flow__map {
  @include flex;
}

.flow__map-item {
  @include pos-rel;

  span {
    @include same-fs-lh(20px);
  }

  &:not(:last-child) {
    margin-right: 184px;

    &::after {
      content: '';
      display: block;
      @include pos-abs;
      top: -106px;
      left: 144px;
      width: 52px;
      height: 24px;
      background-image: url('@/assets/img/support/flow/arrow.png');
      @include pad-bgi;
    }
  }

  &::before {
    content: '';
    display: block;
    @include pos-abs;
    bottom: 49px;
    left: -26px;
    @include square(130px);
    background-image: var(--bgi);
    @include pad-bgi;
  }
}

.join {
  padding-top: 69px;
  padding-bottom: 107px;
  padding-left: 442px;
  box-sizing: border-box;
  height: 581px;
  background-image: url('@/assets/img/support/join-cover.jpg');
  @include pad-bgi;

  h3 {
    @include flex;
    padding-bottom: 45px;

    &::before {
      content: '';
      margin-right: 20px;
      width: 2px;
      height: 36px;
      background-color: #333;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  // 输入框
  input:not(:last-child) {
    margin-bottom: 30px;
    width: 493px;
    height: 60px;
    font-size: 16px;
    border: initial;
    box-shadow: 0 0 1px inset #d3d3d3;

    &::-webkit-input-placeholder {
      padding-left: 21px;
      font-size: 16px;
      line-height: 60px;
      color: #999;
    }

    &:focus {
      box-shadow: 0 0 2px  #fff;
    }
  }

  // 提交按钮
  input:last-child {
    margin-top: 21px;
    width: 150px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    background-color: $theme-color;
    border: initial;
    border-radius: 20px;
  }
}
</style>