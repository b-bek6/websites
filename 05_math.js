//An intrinsic object that provides basic mathematics functionality and constants.

// let a=2.123;
// let b =100;
// let c = 20;
// let minimum;
// let maximum;

// a = Math.round(x); // this will roundup the value
// a = Math.floor(x);  //  floor function this will just ignore the fraction and give the whole number.
// a = Math.ceil(x);   // ceiling function
// a = Math.pow(x,2); // x to the power 2
// maximum = Math.max(a,b,c);  // find the minimum
// minimum = Math.min(a,b,c);  // find the maximum
// x = Math.PI; // value of pi

// console.log(a);
// console.log(maximum);
// console.log(minimum);

let p;
let b;
let h;



// console.log("The value of hypotenous: ", h);

document.getElementById('submitButton').onclick = function() {
    p = document.getElementById('aTextBox').value;
    p = Number(p);

    b = document.getElementById('bTextBox').value;
    b = Number(b);

    h = Math.pow(Math.pow(p,2)+Math.pow(b,2),1/2);
    document.getElementById('cLebel').innerHTML = "Side C:"+ h;
}