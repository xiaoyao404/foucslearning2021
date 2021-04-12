//引入模块
var events = require('events')
    //创建事件驱动器
var eventEmitter = new events.EventEmitter();

//创建connectHandler
var connectHandler = function connect() {
        console.log('连接成功');
        eventEmitter.emit('data_received');

    }
    //绑定
eventEmitter.on('connection', connectHandler)


//绑定
eventEmitter.on('data_received', () => {
    console.log('数据接收成功');

})

eventEmitter.emit('connection');
console.log('连接结束');