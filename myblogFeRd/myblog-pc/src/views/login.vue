<template>
  <div>
    <div class='wrapper'>
      <div class='container'>
        <h3>用户登录</h3>
        <p>用户名：<input type='text' v-model='username' /></p>
        <p>密码：<input type='password' v-model='password' /></p>
        <button @click='getData'>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      data: '',
      password: '',
      username: ''
    }
  },
  methods: {
    ...mapMutations(['setNickName']),
    getData () {
      this.$http
        .post('login', {
          password: this.password,
          username: this.username
        })
        .then(res => {
          console.log(res)
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUserId', res.data.results.user_id)
          this.setNickName(res.data.results.nickname)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
@import '../assets/css/login.css'
</style>
