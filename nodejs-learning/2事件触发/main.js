//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//create event
var connectHandler = function connected(){
    console.log('链接成功');
    //trigger 
    eventEmitter.emit('data_recevied');
}
//bind connect event
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function(){
    console.log('数据接收成功');
});
eventEmitter.emit('connecttion');
console.log("程序执行完毕");
////////////////
