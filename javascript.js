//SETUP
var scrollvalue = 0;
var height = 0;
const $box1 = document.getElementById("box1");
const $box2 = document.getElementById("box2");
var height = window.innerHeight;

//ON LOAD
  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOMContentLoaded");
  window.scrollTo(0,document.body.scrollHeight);
  console.log("bottom");
});
//ON SCROLL

window.onscroll = function() {
  //console.log("onscroll");

  scrollvalue = window.scrollY;
  console.log("scrollvalue " + scrollvalue);

  height = window.innerHeight;
  //console.log("browser height " +height);

scrollvalue = window.scrollY;
var y = window.innerHeight + window.pageYOffset;

// $box1.style.top = (-120 + height + scrollvalue) + "px";
$box1.style.bottom = (10100 - y)*1.05 + "px";
console.log(window.innerHeight + window.pageYOffset);

  switch (true) {

    case (scrollvalue > 9000):
    $box1.style.background ="url('images/red1.png')";
    $box2.style.background ="url('images/smile.png')";
    console.log("scrollvalue " + scrollvalue);
    break;

    case (scrollvalue > 8000):
    $box1.style.background ="url('images/red1.png')";
    $box2.style.background ="url('images/smile.png')";



    break;

    case (scrollvalue > 7000):
    $box1.style.background ="url('images/red1.png')";
    $box1.height ="679px";
    $box2.style.background ="url('images/smile.png')";
    console.log("scrollvalue " + scrollvalue);
    break;


    case (scrollvalue > 6000):
    $box1.style.background ="url('images/red1.png')";
    $box2.style.background ="url('images/raven.png')";
    break;


    case (scrollvalue > 2000):
    $box1.style.background ="url('images/red1.png')";
    $box2.style.background ="url('images/raven.png')";
    break;

    default:
    $box1.style.background ="url('http://placekitten.com/200/300')";
    $box2.style.background ="url(http://placekitten.com/200/300)";

  }




  // if (scrollvalue >= 2000 && scrollvalue <= 8000) {
  //   // $box1.animate({"margin-top" : '10px'}, 1000);
  //   $box1.style.top = (-120 + height + scrollvalue) + "px";
  //   console.log("boxtop " + $box1.style.top);
  //   console.log("if");
  //
  //
  // } else {
  //   // $("#box1").animate({"margin-top" : '-200px'}, 1000); //balloon shoots up
  //   $box1.style.top = (-120 + height + scrollvalue) + "px"; //balloon keeps pace with scroll
  //   console.log("else");

  }
