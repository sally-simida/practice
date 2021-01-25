<template>
  <div>
    <div class='wrapper'>
      <div class='container'>
        <h1>发表文章</h1>
        <h4>标题：<input class='title' type='text' v-model='title' /></h4>
        <div class='box'>
          <span>内容：</span>
          <textarea
            class='content'
            cols='30'
            rows='10'
            v-model='content'
          ></textarea>
        </div>
        <button @click='getData'>发表文章</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    getData () {
      console.log(localStorage.getItem('userId'))
      this.$http
        .post('published', {
          title: this.title,
          content: this.content,
          user_id: localStorage.getItem('userId')
        })
        .then(res => {
          console.log(res)
          if (res.data.msg === 'title') {
            alert('发表文章可不能没有标题啊~')
          } else if (res.data.msg === 'content') {
            alert('没有内容你发啥文章呢？！')
          } else if (res.data.msg === 'successful') {
            alert('文章发表成功！去首页查看！')
            this.$router.push('/')
          } else {
            this.$router.push('/err')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/published.css'
</style>
