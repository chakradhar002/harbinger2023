/**
 * movieTicket is an object having properties movie,hall with readable property only
 * 
 */

let area = {
  radius: 30,
  height: 20
};

//setting object readable only
Object.defineProperty(area, 'radius', {
  value: 30,
  writable: false
});

//try to write radius value
area.radius = 80;

console.log(area);