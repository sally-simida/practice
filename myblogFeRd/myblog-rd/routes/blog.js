const router = require("koa-router")();
const blogController = require("../controllers/blogController");
const auth = require("../config/auth");
//首页
router.get("/home", auth.verifyToken, blogController.getBlogs);
//发表文章
router.post("/published", blogController.published);
//文章详情
router.get("/blogDetail/:blogId", blogController.blogDetail);
module.exports = router;
