// emitter and 1 emitter object
var emitter = require('events').EventEmitter;
var em = new emitter();

// declaring/creating listerers independently
var listner1 = function listner1() {
    console.log('listerner 1 called');
 }
 var listner2 = function listner2() {
    console.log('listerner 2 called');
 }
 var listner3 = function listner2() {
    console.log('listerner 3 called');
 }

 // linking listeners with particular events
em.addListener('first',listner1);
em.addListener('second',listner2);
em.addListener('second',listner3);
// atleast 1 listener is linked with one event
// emitter calls the listeners associated with it
em.emit('first')
em.emit('second')
// removes listner linked with event
em.removeListener('first',listner1)
console.log("event removed")

var cnt = em.listenerCount('second')
console.log(cnt)