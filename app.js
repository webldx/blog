// 引入express框架
const express = require('express');
// 创建web服务器
const app = express();

// 当客户端以get方式请求的时候 执行回调函数
app.get('/', (req, res) => {
    // 向客户端发出相应
    res.send('Hello Blog');
})





// 监听端口
app.listen(3000, (err) => {
    (!err) ? console.log('服务器启动成功,请监听http://localhost:3000端口'): console.log(err);
})