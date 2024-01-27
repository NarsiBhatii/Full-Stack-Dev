const b = new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  
  function callback() {
    console.log("callback called");
  }
  
  console.log(b);
  b.then(callback);
  