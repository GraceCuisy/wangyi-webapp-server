let express = require('express');
// 1. 生成应用的实例对象
const app = express();  // application


// 注册路由,返回主页对应的数据
let indexData=require('./datas/index.json')
app.get('/getIndexData', (request, response) => {
  response.send({
    code:200,
    data:indexData,
  })
});

// 注册路由,返回主页nav对应的模块数据
let indexCateModule=require('./datas/indexCateModule.json')
app.get('/getIndexCateModule', (request, response) => {
  response.send({
    code:200,
    data:indexCateModule,
  })
});


// 注册路由,返回分类左侧导航数据
let cateNavDatas=require('./datas/cateNavDatas.json')
app.get('/getcateNavDatas', (request, response) => {
  response.send({
    code:200,
    data:cateNavDatas,
  })
});

// 注册路由,返回分类右侧内容数据
let cateLists=require('./datas/cateLists.json')
app.get('/getcateLists', (request, response) => {
  response.send({
    code:200,
    data:cateLists,
  })
});

// 注册路由,请求登录的接口
const loginResult={"avatar":null,"nickname":"csy17831135193","memberLevel":0,"isNewUser":1,"hasInterestCategory":false,"hasMemGift":false,"pointsCnt":0,"mosaicUid":"yd****d9@163.com","uniqueId":26218401524,"hideQrCode":false,"frontendAccountType":0,"mobile":null}
app.post('/login', (request, response) => {
  response.send({
    code:200,
    data:loginResult,
  })
});

// 注册路由,请求退出登录的接口
app.get('/logout', (request, response) => {
  response.send({
    code:200,
  })
}); 




// 2. 监听服务器端口号
app.listen('3005', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3005');
  }
})
