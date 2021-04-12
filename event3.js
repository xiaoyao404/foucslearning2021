    var events = require('events');
        var emitter = new events.EventEmitter();
        emitter.on('参与抽奖', () => {
            console.log('恭喜中奖了,100万现金已到账！')
        })
    console.log('抽奖中!请稍等3秒...');
    setTimeout(function() {
                emitter.emit('参与抽奖')
            },
            3000)