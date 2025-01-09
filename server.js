const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 路由处理
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/lovers", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index-lovers.html"));
});


// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
