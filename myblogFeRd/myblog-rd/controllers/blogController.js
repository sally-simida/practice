const blog = require("../models/blog");

module.exports = {
  //get
  async getBlogs(ctx) {
    let results = await blog.getBlog();
    ctx.body = results;
  },
  //get
  async blogDetail(ctx) {
    let { blogId } = ctx.params;
    let results = await blog.getBlogDetail(blogId);
    console.log(results);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      if(results[0].comm_id){
        for (let i = 0; i < results.length; i++) {
          let obj = results[i];
          blogInfo.comments.push({
            comm_id: obj.comm_id,
            comm_content: obj.comm_content,
            comm_post_time: obj.comm_post_time,
            username: obj.username,
          });
        }
      }
      console.log(blogInfo);

      ctx.body = {
        blogInfo
      }
    }
  },
  //post
  async published(ctx) {
    let { title, content, user_id } = ctx.request.body;
    if (title.trim().length == 0) {
      ctx.body = {
        msg: "title",
      };
    } else if (content.trim().length == 0) {
      ctx.body = {
        msg: "content",
      };
    } else {
      let results = await blog.saveArticle({ title, content, user_id });
      console.log(results);
      if (results.insertId) {
        //insertId非空 => 数据库 增 操作成功
        ctx.body = {
          msg: "successful",
        };
      } else {
        ctx.body = {
          msg: "fail",
        };
      }
    }
  },
};
