const colors = ['blue', 'green', 'white'];

function iterate(item) {
  console.log(item);
}

colors.forEach(iterate);

*****************
With index
    
const colors = ['blue', 'green', 'white'];

function iterate(item, index) {
  console.log(`${item} has index ${index}`);
}

colors.forEach(iterate);

*****************
Access to the array

const colors = ['blue', 'green', 'white'];

function iterate(item, index, array) {
  console.log(item);
  if (index === array.length - 1) {
    console.log('The last iteration!');
  }
}

colors.forEach(iterate);

****************
    
let allEven = true;

const numbers = [22, 3, 4, 10];

numbers.forEach(function(number) {
  if (number % 2 === 1) {
    allEven = false;
    // Break here
  }
});

console.log(allEven); // => false