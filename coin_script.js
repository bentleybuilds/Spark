console.log($)
console.log("starting")
$("button").click(ranFlip();


function ranFlip(){
console.log("button clicked");
  var coin = Math.floor((Math.random() * 100) + 1);
  console.log("number generated");
  if (coin <= 50) {
    alert("HEADS!");
    $(ol).append("<li>Heads</li>");
    console.log("if");
} else {
    alert("TAILS!");
    $(ol).append("<li>Tails</li>");
    console.log("else");

  }
});
