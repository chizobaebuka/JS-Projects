let display = document.getElementById('screen');

function wipe (){
    display.value ='';
}

function show(n){
    display.value += n
}

function calc(){
    display.value = eval(display.value);
}