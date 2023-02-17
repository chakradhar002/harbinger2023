const assert = require('chai').assert

const sayHello = require('./sayHello')
describe('test' , function(){
    it('app should return hello' , function(){
        let result = sayHello()
        assert.equal(result , 'Hello')
    })

    it('sayhello should have return of string' , function(){
        let result = sayHello()
        assert.typeOf(result , 'string')
    })

    it('sayHello should not return type null' , ()=>{
        assert.notTypeOf(sayHello() , 'null')
    })
    
    it('sayHello should not return type number' , ()=>{
        assert.notTypeOf(sayHello() , 'number')
    })

    
    it('sayHello should not return type undefined' , ()=>{
        assert.notTypeOf(sayHello() , 'undefined')
    })
})