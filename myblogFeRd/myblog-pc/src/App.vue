<template>
  <div id='app'>
    <div id='nav'>
      <div class='left'>
        <router-link to='/'>首页</router-link>
      </div>
      <div class='right'>
        <span v-if="isShow">{{this.nickName}}</span>
        <span v-else>
          <router-link to='/login'>登录</router-link> |
          <router-link to='/regist'>注册</router-link>
        </span>
        |
        <span @click='clearToken'>
        <span @click="changeIsShow">
          <router-link to='/signOut'>退出</router-link>
        </span>
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['nickName', 'isShow'])
  },
  methods: {
    ...mapMutations(['changeIsShow']),
    clearToken () {
      this.$store.dispatch('setToken', '')
    }
  }
}
</script>
<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #2c3e50;
  }
}

#nav {
  display: flex;
  height: 50px;
  margin-top: -20px;
  background: rgba(148, 144, 144, 0.356);
  justify-content: space-between;
  line-height: 50px;
  .left {
    padding: 0 20px;
  }
  .right {
    padding: 0 20px;
  }
}
</style>
