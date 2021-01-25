<template>
  <div class='wrapper'>
    <ul class="item">
    <h2 style="position:relative;right:300px">文章详情</h2>
      <h3>{{ data && data.title }}</h3>
      <p>{{ data && data.content }}</p>
      <div style="color:rgb(146, 144, 124);position:relative;left:200px">{{ data && data.post_time.slice(0,10) }}</div>
      <span style="position:relative;right:300px;margin:20px 0;">文章评论：</span>
      <li v-for='comment in data.comments' :key='comment.comm_id' style="margin-top: 20px">
        <p>
          <span>{{ comment && comment.username }}</span> :
          <span>{{ comment && comment.comm_content }}</span>
        </p>
        <div style="color:rgb(146, 144, 124);position:relative;left:200px">{{  comment && comment.comm_post_time.slice(0,10) }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getData () {
      const blogId = this.$route.params.blogId
      console.log(blogId)
      this.$http
        .get('blogDetail/' + blogId)
        .then(res => {
          console.log(res)
          this.data = res.data.blogInfo
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/blogDetail.css'
</style>
