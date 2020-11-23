increase = () => {
    let x = document.getElementById('counter');
    console.log(x);
    x.innerHTML = Number(x.innerHTML) + 1;
    colorcheck(x);
}

decrease = () => {
    var x = document.getElementById('counter');
    console.log(x);
    x.innerHTML = Number(x.innerHTML) - 1;
    colorcheck(x);
}

reset = () => {
    var x = document.getElementById('counter');
    console.log(x);
    x.innerHTML = 0;
    colorcheck(x);
}

function colorcheck(l) {
    if(Number(l.innerHTML) > 0){
        l.style.color = "#85FFBD";
    }
    else if(Number(l.innerHTML) < 0){
        l.style.color = '#F7CE68';
    }
    else{
        l.style.color = '#FBAB7E';
    }
}