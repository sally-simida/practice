<template>
  <div>
    <div class='wrapper'>
      <div class='container'>
        <h3>用户注册</h3>
        <p>用户名：<input type='text' v-model='username' /><br /></p>
        <p>
          密码：<input
            type='password'
            id='registPassword'
            v-model='password'
          /><br />
        </p>
        <p>
          昵称：<input type='text' id='registNick' v-model='nickname' /><br />
        </p>
        <button @click='updateUser'>注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowName: true,
      isShowpassword: false,
      isShownick: false,
      username: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    updateUser () {
      this.$http
        .post('regist', {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        })
        .then(res => {
          console.log(res)
          if (res.data.msg === '用户名不得为空！') {
            alert('用户名不得为空！')
          } else if (res.data.msg === '密码不得为空！') {
            alert('密码不得为空！')
          } else if (res.data.msg === '昵称不得为空！') {
            alert('昵称不得为空！')
          } else {
            alert('注册成功啦！')
            this.$router.push('/login')
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
@import '../assets/css/regist.css'
</style>
