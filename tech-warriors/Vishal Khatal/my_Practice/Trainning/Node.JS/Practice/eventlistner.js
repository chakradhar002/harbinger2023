// Import events module
var emitter = require('events').EventEmitter;

// Create an eventEmitter object
var em = new emitter();
em.addListener('firstevent', function (data) {
    //console.log('first subscriber' + data)
})
setTimeout(()=> {em.emit('firstevent', 'Cottonking Sale -Unconditional 20% Discount On All fresh Stock.\n Sale ends on Sunday 12th Feb. Add: near Kothrud Stand kothrud ,\n Pune Ph:8883453853')},
1000);

