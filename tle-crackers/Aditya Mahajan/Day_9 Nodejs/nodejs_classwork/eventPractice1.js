var emitter = require('events').EventEmitter;
var em = new emitter();

var list1 = function list1(){
    console.log("first listener called");
}
var list2 = function list2(){
    console.log("second listener called");
}
var list3 = function list3(){
    console.log("third listener called");
}
// max listeners 
em.setMaxListeners(2)	
//



em.addListener('first',list1)
em.addListener('first',list2)
em.emit('first')
console.log("------------------------")
em.addListener('second',list2)
em.addListener('second',list3)
em.emit('second')
console.log("------------------------")
em.removeListener('first',list1);
console.log("listener removed")


console.log("------------------------")
var cnt = em.listenerCount('first')
console.log("first event has listeners  = "+cnt)
console.log("------------------------")
var cnt = em.listenerCount('second')
console.log("second event has listeners = "+cnt)
console.log("------------------------")
console.log("Event names => "+ em.eventNames())
console.log(nodem.listeners('second'))


