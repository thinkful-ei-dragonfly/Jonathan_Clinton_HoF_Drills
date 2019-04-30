'use strict';
function repeat(fn, n){
  for(let i = 0; i <= n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}
/*repeat(hello,5);
repeat(goodbye,5);*/

function filter(arr, fn) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])=== true){
      newArr.push(arr[i]);
    } 
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
/*const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});*/

console.log(filter(myNames, (name) => name[0] === 'R')) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function (location){
    warningCounter++;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter > 1) {
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`)
    }
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the road!');
const tornadoWarning = hazardWarningCreator('Tornado approaching your area!');
const floodWarning = hazardWarningCreator('Flooding in your area!');

rocksWarning('Chicago');
tornadoWarning('Mclean County');
floodWarning('Bloomington-Normal');
rocksWarning('Athens');
floodWarning('Atlanta');

function turtleMovement(arr) {
   
  arr
  //filter looks at each esement and if the function equals true it pushes into a new array
    .filter(element => element[0] >= 0 && element[1] >= 0)
    .map(element => element[0] + element[1])
    .forEach((element, i) => console.log(`Movement ${i+1}: ${element} steps`));
}

console.log(turtleMovement([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));

function decoder(string) {
    //Splitting into an array correctly
    const arr = string.split(' ');
    return arr.reduce((acc, currentValue) => {
        if(currentValue.length === 3){
            return acc + ' ';
        }
        else{
            return acc + currentValue[currentValue.length - 1].toUpperCase();
        }
    },'')
    /*const reducer = function (acc, currentValue) {
        if (currentValue.length === 3){
        return acc.concat(' ');
    }
        else {
        return acc.concat(currentValue[(currentValue.length) - 1]);
    }
}
    console.log(arr.reduce(reducer,''));*/
}

console.log(decoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));