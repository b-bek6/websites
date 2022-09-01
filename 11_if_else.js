alert('hi');
document.getElementById('myButton').onclick = () =>{

    if(document.getElementById('myCheckBox').checked){
        console.log('You are subscribed.');
    }
    else{
        console.log('You are not subscribed.');
    }
}