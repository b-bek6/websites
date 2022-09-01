setInterval(date,1000);
function date(){
    let a;
    let date;
    let time;
    a = new Date();
    time = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    date = a.toLocaleDateString();
    document.getElementById('insideButton').innerHTML = time + ' On ' +date ;
}
