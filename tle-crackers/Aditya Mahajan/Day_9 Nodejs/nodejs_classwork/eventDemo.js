var emitter = require('events').EventEmitter;
var em = new emitter();
em.addListener('firstevent', function (data) {
    console.log("Hello, booking is started for the first event" + data);

})

em.addListener('secondevent', function (data) {
    console.log("Hello, booking is started for the second event " + data);

})

// raising first event

setTimeout(()=> {
    em.emit('firstevent','first event emitter');
},5000);

// raising second event
// em.emit('secondevent','second event emitted')