const router = require("koa-router")();
const userController = require("../controllers/userController");

router.post("/login",  userController.userLogin);

router.post("/regist", userController.userRegist);

/* function (ctx, next) {
  let {username, password} = ctx.request.body;
  if(username == 'lisi' && password == "123456"){
    ctx.body = "success";
  }else{
    ctx.body = 'fail';
  }
} */

//router.get('/list', ...);

module.exports = router;
