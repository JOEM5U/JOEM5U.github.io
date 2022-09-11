var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];
//Arrays have the '[]' brackets, they contain variables/strings 
fruitArray[1]="tomato"
//This can pverwrite/change the array 
var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

//console.log(fruitArray);
//This retrives a specific variable in the array, that could be in an array 
for(var fruit of fruitArray){
    if(fruit === "tomato"){
        console.log("what's a tomato doing here?")
    }else{
        console.log(fruit)
    }
}

// for (x of y)