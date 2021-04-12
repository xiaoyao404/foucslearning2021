var EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter()
var errHandler=function(){
console.log('Error!');
}

emitter.on('err',errHandler);
emitter.emit('err');