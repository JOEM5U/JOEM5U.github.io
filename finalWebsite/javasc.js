//function for the enabling of the 2nd button set 
//I decided to do it this way to better direct the viewer through the interaction. After pressing the first button the 2nd button connect to the first would pop up
function enableButton2() {
  document.getElementById("button2").disabled = false;
}

function enableButton4() {
  document.getElementById("button4").disabled = false;
}

function enableButton6() {
  document.getElementById("button6").disabled = false;
}

//Found the tutorial on w3schools. What I did here is to kinda give a sense of the oven door opening or closing by having the door.
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function revealDoor() {
  var c = document.getElementById("box-eight");
  if (c.style.display === "block") {
    c.style.display = "none";
  } else {
    c.style.display = "block";
  }
}
//This is simlar to the one above however it is for the heat when the bread is baking, to give a sense that the bread is being cooked
function revealHeat(){
  var y = document.getElementById("box-seven");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

//This is for the function to grab the animation and play it. The main issue with doing it this way was that I think it conflicts with the coode in the css.
//Rather than the code keeping the animation state, this way instead returns it to its original state before the animation, which was annoying to work with. 
function undercookBread(){
  document.querySelector('.bread').style.animation="undercookBread 10s";
}

function chefsKiss(){
  document.querySelector('.bread').style.animation="chefsKiss 30s";
}

function burntBread(){
  document.querySelector('.bread').style.animation="burntBread 40s";
}

//This is to run multiple function on the one click. However this couold also been done through eventlistener.
//Before submitting this, whilst this allows me to run multiple functions on the one click I felt like it was a bit lmiting to use.
function main1() {
  enableButton2();
  revealDoor();
}

function main2(){
  enableButton4();
  revealDoor();
}

function main3(){
  enableButton6();
  revealDoor();
}

//This iis for the 2nd button functions

function set2main1() {
  undercookBread();
  revealHeat();
}

function set2main2() {
  chefsKiss();
  revealHeat();
}

function set2main3() {
  burntBread();
  revealHeat();
}

//Here I tried to implement a timeout function for the heat however I cannot get it to work.
//Im not really sure how to get it working, perhaps I need something to trigger the hideHeat function in the firstplace. 
function hideHeat() {
  var y = document.getElementById("box-seven");
  if (y.style.display === "block") {
    setTimeout(function() {
      y.style.display = 'none';
    }, 4000);
  }
}
