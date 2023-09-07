import request from '@/utils/request'

// 获取轮播图地址
function getBanners() {
  return request('/indexbanners',  'GET')
}

// 获取新闻列表
function getNewsList(pageNumber, pageSize) {
  return request('/newslist', 'GET', { pageNumber, pageSize })
}

// 根据id获取新闻文章
function getArticle(id) {
  return request(`/news/${id}`, 'GET')
}

// 提交申请
function subApplication(data) {
  return request('/application', 'POST', data)
}

export default {
  getBanners, getNewsList, getArticle, subApplication
}