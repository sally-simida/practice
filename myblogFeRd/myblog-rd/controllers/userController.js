const userDB = require("../models/user");
const auth = require("../config/auth")

module.exports = {
  async userLogin(ctx) {
    let { username, password } = ctx.request.body;
    let [results] = await userDB.login(username, password);
    console.log(results);
    if (results) {
      //此处判断条件若写 results.length>0 ,results.length为undefined?

      //登陆成功 生成token
      let payload = {
        userId: results.user_id,
        username: results.username,
      };
      var token = auth.createToken(payload);
      /* results
          [
    RowDataPacket {
      user_id: 5,
      username: 'lisi',
      nickname: '李四',
      password: '123456',
      create_date: 2020-10-23T12:23:59.000Z
    } 
        ]      */
      console.log(token);
      ctx.body = {
        results,
        token,
      };
    }
  },
  async userRegist(ctx) {
    let { username, password, nickname } = ctx.request.body;
    if (username.trim().length == 0) {
      ctx.body = {
        msg : '用户名不得为空！'
      }
    } else if (password.trim().length == 0){
      ctx.body = {
        msg : '密码不得为空！'
      }
    }else if (nickname.trim().length == 0){
      ctx.body = {
        msg : '昵称不得为空！'
      }
    } else {
      let results = await userDB.regist({ username, password, nickname });
      console.log(results);
      if (results.insertId) {
        //insertId非空 => 数据库 增 操作成功
        ctx.body = {
          results
        };
      }
    }
  },
};
