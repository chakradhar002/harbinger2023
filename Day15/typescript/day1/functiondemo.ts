//funtion demo

function add(a: number, b: number): number {
    return a + b;
}

let sum = add(10, 20);
console.log(sum)

//another function 
function echo(message: string): string {

    return message.toString();
}
//Inferring function types
//when you have the type on one side of the equation. 
// form of type inference is called contextual typing
let add2 = function (x: number, y: number) {
    return x + y;
};


    // TypeScript function types

    let add1: (x: number, y: number) => number;
