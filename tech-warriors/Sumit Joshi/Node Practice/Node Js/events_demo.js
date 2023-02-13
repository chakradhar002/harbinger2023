var emitter = require('events').EventEmitter

var em = new emitter()

//Raising firstevent
em.addListener('firstEvent',(data)=>{
setTimeout(()=>{
    console.log("this is first event");
},2000)
})


em.addListener('secondEvent',(data)=>{
    setTimeout(() => {
        console.log("This is second event");
    }, 3000);
})

em.emit('firstEvent');
em.emit('secondEvent');
