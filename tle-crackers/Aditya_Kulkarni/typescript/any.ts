// this is automatically inferred as any 
// any is always bad and we should avoid it 

let heroSection // is also equal to  let heroSection : any ;

// any disables type checking 

function getHero() {
    return "thor"
}

heroSection = getHero()

export {}


// we can avoid it using 

let hero : string 

function getHerro(){
    return "Hello HEro"
}

hero = getHerro()