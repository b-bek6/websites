dateAndTime = () =>{
    let a;
    let date;
    let time;
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    date = a.toLocaleDateString();
    document.getElementById('time').innerHTML = time + ' ' + date;
}
setInterval(dateAndTime,1000);