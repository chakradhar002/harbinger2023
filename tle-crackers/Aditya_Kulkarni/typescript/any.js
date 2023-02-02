"use strict";
// this is automatically inferred as any 
// any is always bad and we should avoid it 
exports.__esModule = true;
var heroSection; // is also equal to  let heroSection : any ;
// any disables type checking 
function getHero() {
    return "thor";
}
heroSection = getHero();
// we can avoid it using 
var hero;
function getHerro() {
    return "Hello HEro";
}
hero = getHerro();
