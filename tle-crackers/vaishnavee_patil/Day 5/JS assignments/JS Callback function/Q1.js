
function callCallback(call) {
    call();
  }
  
  callCallback(function() {
    console.log("Hello!");
  });
  