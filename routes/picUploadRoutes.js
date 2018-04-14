//该部分可以实现图片和文本内容的上传和图片的返回显示，
//但是我们需要的操作是，上传图片和项目信息，把图片重命名，把信息都存进Address里面，
//然后把这一项的id赋给用户的headpic,backpic,完成后然后触发前端部分发起一个刷新的请求，
//请求可以通过User表取得两个图片的id，然后再找到地址，然后植入进去

const multer = require("multer");
let storage = multer.diskStorage({
  //设置上传后文件路径，./public/images 文件夹会自动创建。
  destination: function(req, file, cb) {
    cb(null, "./public/images");
  },
  //给上传文件重命名，获取添加后缀名
  filename: function(req, file, cb) {
    let fileFormat = file.originalname.split(".");
    let filename =
      file.fieldname +
      "-" +
      Date.now() +
      "." +
      fileFormat[fileFormat.length - 1];
    cb(null, filename);
  }
});
let uploadpic = multer({
  storage: storage
});
module.exports = app => {
  //uploadpic.single("pic")
  app.post(
    "/api/upload",
    uploadpic.fields([
      { name: "headpic", maxCount: 1 },
      { name: "backpic", maxCount: 1 }
    ]),
    async (req, res) => {
      console.log("ready to recieve pic upload and its infomation");
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
      console.log(req.files);

      let headfile = await req.files['headpic'][0];

      // let headfileFormat = await headfile.originalname.split(".");
      // let headfilename =
      //   (await headfile.fieldname) +
      //   "-" +
      //   Date.now() +
      //   "." +
      //   headfileFormat[headfileFormat.length - 1];
      // console.log("headfilename is : " + headfilename);

      let backfile = await req.files['backpic'][0];
      let backfileFormat = await backfile.originalname.split(".");
      let backfilename =
        (await backfile.fieldname) +
        "-" +
        Date.now() +
        "." +
       backfileFormat[backfileFormat.length - 1];
      console.log("backfilename is : " + backfilename);

      res.send(
        `
        <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>图片显示</title>
</head>
<body>
 <img src="/images/` +
          headfile.filename +
          `
 "/>
</body>
</html>
        `
      );
    }
  );
  app.get("/api/uploadpic", (req, res) => {
    res.send(`
          <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>上传文件</title>
</head>
<body>
<span style="font-size:14px;"><form method="post" enctype="multipart/form-data" action="/api/upload">  
    <input type="file" name="headpic" value="选择头像"/> 
    <input type="file" name="backpic" value="选择背景"/> 
    title:<input type="text" name="title"/>
    <input type="submit">  
</form></span>
</body>  
</html>
          `);
  });
};
