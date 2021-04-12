//载入express 模块
const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

//绑定到app上
const app = express()
app.set('x-powered-by', false)


//log middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next()
})


const questions = {
    '55': '如何找工作',
    '56': '找工作秘诀',
    '57': '如何打球',

}


app.get('/question/:questionId', (req, res, next) => {
    console.log(req.params, req.query);
    var question = question[req.params.questionId]
    res.type('txt/html; charset=UTF-8')
    res.end("<h1>" + question + '</h1>')
})

app.use((req, res, next) => {
    if (req.method == 'GET') {

    } else {
        next()
    }
})
app.use((req, res, next) => {
        res.json({
            a: 1,
            b: 2
        })
    })
    //不用引进http module,app引进express，包含http，所以可以直接用app.listen
    //app.listen()
    //var server = http.creatServer(app);
    //端口，function

app.listen(8005, () => {
    console.log('Listening on port', 8005);
})