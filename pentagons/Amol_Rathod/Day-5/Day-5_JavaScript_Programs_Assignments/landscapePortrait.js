console.log("\n** JavaScript Programs ||  Landscape and Portrait \n**");

const size = (width, height) => {
  if (width > height) {
    console.log("Orientation is LANDSCAPE");
  } else {
    console.log("Orientation is PORTRAIT");
  }
};

size(150, 200);
size(200, 100);
