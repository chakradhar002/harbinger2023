console.log('object-equality');
  let obj1 = {
    name:'vishal',
    age:23,
    ranking:1
  }
  let obj2 = {
    name:'vishal',
    age:23,
    ranking:1
  }
  var obj3 = obj2;
/**
 * ISEqual function checks if both objects are equal or same using === 
 * @param {object} obj1 
 * @param {object} obj2 
 */
   function ISEqual(obj1,obj2)
   {
        return obj1.name===obj2.name && obj1.age===obj2.age && obj1.ranking===obj2.ranking;
   }
   /**
    * function checks if both objects are equal or same using === 
    * @param {object} obj1 
    * @param {object} obj2 
    * @returns 
    */
   function ISSame(obj1,obj2){
    return obj1==obj2;
   }
            console.log(obj1);
            console.log('-----------------------------');
            console.log(obj2);
            console.log('-----------------------------');
            console.log(obj3);
            console.log('-----------------------------');
            console.log('isEqual: ',ISEqual(obj2,obj3));
            console.log('-----------------------------');
            console.log('isSame :',ISSame(obj1,obj2));
            console.log('isSame :',ISSame(obj2,obj3));