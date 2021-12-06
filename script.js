//accessing the numbers being typed for add reduce function

let numberOne = document.querySelector("#num1");
console.log(numberOne)

let numberTwo = document.querySelector("#num2");
console.log(numberTwo);

//accessing numbers for filter function

const arrayMethodTwo = document.querySelector("#number");

//accessing dropping repeats values function

const arrayMethodThree = document.querySelector("#arr3");
console.log(arrayMethodThree);

//button that is clickable for reduce function to activate

const button = document.querySelector("#button1");
console.log(button)

//second button which clicks to access results on filter function

const clicking = document.querySelector("#clicking-button");

//Third button for clicking on results to drop repeats in an array.

const clickAwayExtras = document.querySelector("#drop-repeats-button");
console.log(clickAwayExtras);

//message for total once calculated with reduce function

const awareness = document.querySelector("#outcome");

//second message which indicates the answer for divisible numbers.

const whatsMyDivisible = document.querySelector("#total-divised");

//message variable for drop repeats function that will appear if correct or incorrect.

const dropThoseRepeats = document.querySelector("#array-message")
console.log(dropThoseRepeats);

//reduce function which adds one number to the other

const addingNumbers = arr => arr.reduce((previousValue, currentValue) => previousValue + currentValue);

//let adding = arr.push(numberOne, numberTwo);
//console.log(adding)

//console.log(addingNumbers([9,20,33,77,99,2,7,10]));
//returned result should be 257

//console.log(addingNumbers([2,1]));
//should return 3

//filter function which finds all divisible numbers by 2

const divisible = arr => arr.filter(n => n % 2 === 0);

//console.log(divisible([55, 33, 2, 4, 19, 22, 102, 33]));
//should return 2, 4, 22, 102;

//console.log(divisible([346, 218, 106, 100, 519, 194, 90, 152]))
//should return 346, 218, 106, 100, 194, 90, 152;

//console.log(divisible([317, 125, 103, 90, 159]))
//should return 90

//second eventListener for filter function method


button.addEventListener("click", function(){
  //I need to make the string,inputs into numbers with a parseInt() method

  let parsed = parseInt(numberOne.value);
  //console.log(parsed)

  let parsedTwo = parseInt(numberTwo.value);
  //console.log(parsedTwo)

  //letting it pick up the function that includes the value.
  let answer = addingNumbers([parsed, parsedTwo]);
  console.log(answer)

  //I want this to calculate an outcome message for the result once clicked

  awareness.innerText = `The answer is ${answer}.`;
  console.log(awareness.innerText);
})

clicking.addEventListener("click", function(){

  //making sure that the values formulate as number array with a parseInt() method.
  let divisibleNums = parseInt(arrayMethodTwo.value);
  
  //calling the function with the number values.
  let funcFilt = divisible([divisibleNums]);
  console.log(funcFilt);

  //message indicating the divisible numbers.
    if(funcFilt == arrayMethodTwo.value){
    return whatsMyDivisible.textContent = `Divisible Outcome is ${funcFilt}.`;
    } else if(funcFilt !== arrayMethodTwo.value){
      return whatsMyDivisible.textContent = `Incorrect Number, This is not Divisible by two.`;
    }
})

//let array = ["Squid", "Squid", 8, 8, "Octopus", "Octopus", 1, 6, 7, 7, 1, 1, "Dolphin", "Dolphin"];

function dropRepeats(array) {
//beginning with transforming the array of repeats to a Set. This new Set will take away all repeat elements.
//then it will transform the Set back into an array.
let cuttingAwayRepeats = [...new Set(array)];
//console.log(cuttingAwayRepeats);
return cuttingAwayRepeats
}

//console.log(dropRepeats([1, 1, 2, 3, 3, 2, 1]));
// returns [1, 2, 3]

//console.log(dropRepeats(['hi', 'there', 'there', 2, 1, 1, 'hi']));
// returns ['hi', 'there', 2, 1]

//console.log(dropRepeats([]));
// returns []

//I want to be able to type the numbers and click the button so that the function will commence and show the result on screen.
clickAwayExtras.addEventListener("click", function(){

    let drop = arrayMethodThree.value.trim().split(" ");
    //console.log(drop)
  
   let callDatFunction = dropRepeats(drop);
   //console.log(callDatFunction);

   if(callDatFunction) {
    return dropThoseRepeats.textContent = `Excellent!!! You've dropped those repeats which accepts ${callDatFunction}`;
    };
});
  
