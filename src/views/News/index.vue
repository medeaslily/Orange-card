<template>
  <div class="news">
    <!-- 横幅   -->
    <div class="news__banner">
      <h2>橙券新闻动态</h2>
      <p class="news__banner-des">新闻动态抢先看，从能力输出到技术赋能，橙券从未放缓脚步，只为与您见证橙券成长的每一步！</p>
    </div>
    <!--  新闻主体  -->
    <div class="news__content">
      <el-row class="news__cards" :gutter="20">
        <el-col class="news__card"
                :span="8"
                v-for="(item,id) in newsList"
                :key="id">
          <news-card :img-src="item.cover"
                    :title="item.title"
                    :time="item.updatedAt"></news-card>
        </el-col>
      </el-row>
      <!--  分页器   -->
      <el-pagination
          class="news__pagination flex-box flex-center2x"
          layout="prev, pager, next"
          :current-page="currentPage"
          @current-change="currentChange"
          :page-size="pageSize"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>

import NewsCard from "@/views/News/components/news-card.vue";

export default {
  name: 'news-page',
  components: {NewsCard},
  data() {
    return {
      imgSrc: require('../../assets/img/news/card1.jpg'),
      title: '笃行，致远，致我们不平凡的2019！',
      time: '2018-05-01',
      pageSize: 9,
      currentPage: 1,
      total: 36,
      newsList: []
    }
  },
  mounted() {
    this.getNewsList(this.currentPage)
  },
  methods: {
    currentChange(cur) {
      this.currentPage = cur
      this.getNewsList(cur)
    },
    getNewsList(page) {
      this.$req('/newslist', 'get', {
        page,
        pageSize: this.pageSize
      }).then((res) => {
        console.log(res)
        this.newsList = res.data
        this.total = res.pagination.total
      })
    }
  },
}
</script>
<style lang="scss" scoped>

// 新闻整体

.news {
  margin-top: 80px;
  background-color: #fcfcfc;
}

// 新闻横幅

.news__banner {
  height: 200px;
  background: url(../../assets/img/news/banner.png) no-repeat center/cover;
  text-align: center;
  color: #fff;
}

h2 {
  padding-top: 44px;
  font-size: 40px;
  line-height: 64px;
  font-weight: 400;
}

.news__banner-des {
  font-size: 20px;
  line-height: 34px;
}

// 新闻内容

.news__content {
  @include w1200;
  padding-top: 82px;
  padding-bottom: 62px;
}

.news__card {
  margin-bottom: 60px;
}

// 分页器


// 定义页码按钮 选中以及当前分页对应页码按钮的样式

@mixin pagination-active {
  width: 35px;
  color: #fafafa;
  background-color: #ff6c00;
  border-radius: 50%;
}

::v-deep {
  .el-pager {
    li {
      height: 35px;
      font-size: 16px;
      line-height: 35px;
      background-color: initial;
      color: #666;

      &:not(:last-child) {
        margin-right: 32px;
      }

      &:hover, &.active {
        @include pagination-active;
      }
    }
  }

  .el-pagination {
    button {
      background-color: initial;
    }

    .el-icon {
      width: 22px;
      height: 22px;
      line-height: 22px;
      color: #fcfcfc;
      border-radius: 50%;
      background-color: #dedede;
    }
  }
}

</style>