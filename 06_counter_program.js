
let count = 0;

document.getElementById('increaseBtn').onclick = function(){
    count += 1;
    document.getElementById('displayNum').innerHTML = count;
}
document.getElementById('resetBtn').onclick = function(){
    count = 0;
    document.getElementById('displayNum').innerHTML = count;
}
document.getElementById('decreaseBtn').onclick = function(){
    count -=1;
    document.getElementById('displayNum').innerHTML = count;
}