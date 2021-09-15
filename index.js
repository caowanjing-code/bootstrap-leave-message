const express=require('express');
const bodyParser=require('body-parser');
const app=new express();

// 模板引擎配置
app.set('views','./static');
app.set('view engine','ejs');
app.use(bodyParser());
var messages=[];//存储数据
app.get('/',(req,res)=>{
    res.render('message',{messages});
})
app.route('/index')
.get((req,res)=>{
    res.render('index');
})
.post((req,res)=>{
    if(req.body.name &&req.body.content){
        const now=(new Date()).toLocaleString();
        messages.push({
            name:req.body.name,
            content:req.body.content,
            time:now
        })
        res.redirect('/');

    }else{
        throw new Error('内容和username不能为空');      
    }
})
app.listen(8080,()=>{
    console.log('is listening port 8080')
})