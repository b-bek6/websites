// constants are the variables that can't be changed

const PI = 3.14159 // It is good practice to write constants with capital lettors.
let radious;
let circumference;

radious = window.prompt("Enter the radious: ");
radious = Number(radious);

// PI = 28; // we cannot do thid because the value of const cannot be reassigned.
circumference = PI * radious * 2;

console.log('The circumference is ',circumference);
