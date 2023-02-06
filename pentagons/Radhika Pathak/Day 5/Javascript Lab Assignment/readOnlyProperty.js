const CIRCLE = {
  name: 'mainCircle',
  lineColor: 'red',
  bgColor: 'gray',
  radius: 3,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

document.write('CIRCLE.area:', CIRCLE.area);