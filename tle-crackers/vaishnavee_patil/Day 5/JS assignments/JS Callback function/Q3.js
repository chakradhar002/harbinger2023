
function call(callback, n) {
    for (let i = 0; i < n; i++) {
      callback();
    }
  }
  
  call(() => console.log("I am being called"), 4);
  
