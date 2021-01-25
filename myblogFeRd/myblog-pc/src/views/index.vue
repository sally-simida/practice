<template>
  <div class='wrapper'>
    <div class='published'>
      <router-link to='/published'>发表文章</router-link>
    </div>
    <ul class='container'>
      <li class='item' v-for='blog in data' :key='blog.blog_id'>
        <h3>
          <router-link :to="'/blogDetail/' + blog.blog_id">{{
            blog && blog.title
          }}</router-link>
        </h3>
        <p>{{ blog.content }}</p>
        <span style="color:rgb(146, 144, 124);position:relative;left:200px">{{ blog && blog.post_time }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '../utils/dateTimeUtil'
export default {
  data () {
    return {
      data: null
    }
  },
  methods: {
    getData () {
      this.$http({
        url: 'home',
        headers: {
          Authorization: localStorage.getItem('mytoken')
        }
      })
        .then(res => {
          console.log(res)
          this.data = res.data
          for (let index = 0; index < this.data.length; index++) {
            this.data[index].post_time = formatTime(this.data[index].post_time, '=')
          }
        })
        .catch(err => {
          console.log(err)
          alert('账号已过期，请重新登录！')
          this.$router.push('/login')
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/index.css'
</style>
