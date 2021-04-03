
var output = []
var over = 0
function sehm() {
  document.querySelectorAll("h1")[0].classList.remove("red");
  document.querySelectorAll("h1")[1].classList.remove("red");
  document.querySelectorAll("h1")[2].classList.remove("red");

  var chance1 = Math.floor(Math.random()*3);

  if (output.includes(chance1) === true ) {
    return sehm();
  } else {
    output.push(chance1);
  }


  if (chance1 === 0) {
    document.querySelectorAll("h1")[0].classList.toggle("red");
  } else if (chance1===1) {
    document.querySelectorAll("h1")[1].classList.toggle("red");
  } else {
    document.querySelectorAll("h1")[2].classList.toggle("red");
  }


  if (output.length === 3) {
 overfunc() ;
 output = [];
  } else {
  }


}

function overfunc() {
  setTimeout(function(){ alert("over"); }, 500);
}
