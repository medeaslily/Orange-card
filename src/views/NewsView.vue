<template>
  <div class="news">
    <div class="news__banner">
      <h2>橙券新闻动态</h2>
      <p class="news__banner-des">新闻动态抢先看，从能力输出到技术赋能，橙券从未放缓脚步，只为与您见证橙券成长的每一步！</p>
    </div>
    <div class="wrapper news__container">
      <el-row class="news__cards" :gutter="20">
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
        <el-col class="news__card" :span="8">
          <BaseCard :img-src="imgSrc"
                    :title="title"
                    :time="time"></BaseCard>
        </el-col>
      </el-row>
      <el-pagination
          class="news__pagination flex-box flex-center2x"
          layout="prev, pager, next"
          :current-page="currentPage"
          @current-change="currentChange"
          :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: 'NewsView',
  components: {BaseCard},
  data() {
    return {
      imgSrc: require('../assets/img/news/card1.jpg'),
      title: '笃行，致远，致我们不平凡的2019！',
      time: '2018-05-01',
      currentPage: 1
    }
  },
  methods: {
    currentChange(val) {
      console.log(`第 ${val} 页`)
    }
  },
}
</script>
<style lang="scss" scoped>

// 新闻整体

.news {
  background-color: #fcfcfc;
}

// 新闻横幅

.news__banner {
  height: 200px;
  background: url(../assets/img/news/banner.png) no-repeat center/cover;
  text-align: center;
  color: #fff;
}

h2 {
  padding-top: 44px;
  font-size: 40px;
  line-height: 64px;
}

.news__banner-des {
  font-size: 20px;
  line-height: 34px;
}

// 新闻内容

.news__container {
  margin-top: 22px;
  padding-bottom: 62px;
}

.news__card {
  margin-top: 60px;
}

// 分页器

.news__pagination {
  padding-top: 60px;
}

// 定义页码按钮 选中以及当前分页对应页码按钮的样式

@mixin pagination-active {
  width: 35px;
  color: #fafafa;
  background-color: #ff6c00;
  border-radius: 50%;
}

::v-deep .el-pager li {
  height: 35px;
  font-size: 16px;
  line-height: 35px;
  background-color: initial;
  color: #666;
}

::v-deep .el-pager li:not(:last-child) {
  margin-right: 32px;
}

::v-deep .el-pager li:hover {
  @include pagination-active;
}

::v-deep .el-pager li.active {
  @include pagination-active;
}

::v-deep .el-pagination button {
  background-color: initial;
}

::v-deep .el-pagination .el-icon {
  width: 22px;
  height: 22px;
  line-height: 22px;
  color: #fcfcfc;
  border-radius: 50%;
  background-color: #dedede;
}
</style>