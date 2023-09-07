<template>
  <div class="article">
    <NewsBanner></NewsBanner>
    <div class="article__content">
      <!--   面包屑   -->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/news' }">新闻动态</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: '/' }">{{ article.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <h3 class="article__title">{{ article.title }}</h3>
      <p class="article__time">{{ time }}</p>
      <div class="split-line"></div>
      <!--   文章内容   -->
      <div class="article__text-block" v-html="article.content"></div>
      <!--  翻页    -->
      <div class="article__turner">
        <span>上一篇：笃行，致远，致我们不平凡的2019！</span>
        <span>下一篇：老员工答谢晚宴暖心举办，心怀感恩一路同行</span>
      </div>
    </div>
  </div>
</template>
<script>
import NewsBanner from "@/views/News/components/NewsBanner.vue";

export default {
  name: 'article-page',
  components: {NewsBanner},
  mounted() {
    this.getArticle()
  },
  props: {
    time: {
      type: Number
    },
  },
  data() {
    return {
      articleId: this.$route.params.id,
      article: {},
    }
  },
  computed: {
  },
  methods: {
    async getArticle() {
      let res = await this.$api.getArticle(this.articleId)
      this.article = res.data
      console.log(this.article)
    }
  },
}
</script>
<style lang="scss" scoped>
.article {
  margin-top: $header-height;
}

.article__content {
  @include w1160;
  padding-top: 61px;
  padding-bottom: 48px;
  text-align: center;

  h3 {
    padding-top: 58px;
    padding-bottom: 14px;
    font-size: 30px;
    font-weight: 400;
  }
}

// 面包屑
::v-deep {
  // 父目录
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-size: 16px;
    font-weight: 400;
    color: #a9a9a9;
  }

  // 子目录
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #333;
  }

  // 分隔符
  .el-breadcrumb__separator {
    margin: initial;
    font-size: 16px;
    color: #a9a9a9;
  }
}

.article__time {
  padding-bottom: 37px;
  font-size: 16px;
  color: #666;
}

.split-line {
  width: 1160px;
  height: 1px;
  background-color: #e5e5e5;
}

.article__text-block {
  @include hor-center;
  width: 773px;
  font-size: 16px;
  line-height: 30px;
  color: #666;
}

.article__turner {
  @include flex-btw;
  margin-top: 81px;
  @include same-fs-lh(16px);
  color: #666;
  cursor: pointer;

  & span:hover {
    color: $theme-color;
  }
}
</style>