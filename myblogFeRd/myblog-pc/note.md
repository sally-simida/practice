## 总结易错点

1. ...mapstate() 解构属性应该写在 computed 中！！！
2. 页面之间get方式传递参数用 this.$route.params来接受参数

## 奇怪点！

1. app.vue 中，
   需求是：登陆成功显示名字隐藏登录和注册；否则显示登录和注册；
   在登陆成功以后，刷新页面会出现，名字隐藏、登录和书册显示，
   vuex 中，isShow 变成初始值 false

