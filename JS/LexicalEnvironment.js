const a = 45;
function ab() {
  function b() {
    console.log(a);
    function cd() {
      let a = 54;
    }
    cd();
  }
  b();
}

ab();
