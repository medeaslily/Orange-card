<template>
  <div class="news">
    <!-- 横幅   -->
    <NewsBanner></NewsBanner>
    <!--  新闻主体  -->
    <div class="news__content">
    <!--  新闻卡列表    -->
      <ul class="news__cards">
        <NewsCard class="news__card"
                  v-for="(news,id) in newsList"
                  :key="id"
                  :card="getCard(news)"
                  @toArticle="toArticle(news._id)"></NewsCard>
      </ul>
      <!--  分页器   -->
      <el-pagination
          class="news__pagination"
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
import NewsCard from "@/views/News/components/NewsCard.vue";
import NewsBanner from "@/views/News/components/NewsBanner.vue";

export default {
  name: 'news-page',
  components: {NewsBanner, NewsCard},
  data() {
    return {
      pageSize: 9,
      currentPage: 1,
      total: 36,
      newsList: [],
      newsCardList: []
    }
  },
  mounted() {
    this.getNewsList(this.currentPage)
  },
  computed: {
    getCard() {
      return (news) => {
        return {imgSrc: news.cover, title: news.title, time: news.updatedAt}
      }
    }
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
        this.newsList = res.data
        this.newsCardList = res.data.map((item) => {
          return  { imgSrc: item.cover, title: item.title, time: item.updataAt }
        })
        this.total = res.pagination.total
      })
    },
    toArticle(id) {
      this.$router.push({ name: 'article', params: { id } })
    }
  },
}
</script>
<style lang="scss" scoped>
// 新闻整体

.news {
  margin-top: $header-height;
  background-color: #fcfcfc;
}

// 新闻主体

.news__content {
  padding-top: 82px;
  padding-bottom: 62px;
  background-color: #fcfcfc;
}

// 新闻卡片列表

.news__cards {
  @include w1200;
  @include flex-btw;
}

.news__card {
  margin-bottom: 60px;
}

// 分页器
.news__pagination {
  @include flex-center2x;
}

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