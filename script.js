let count = 0;

function increaseCount(){
    count++;
    document.getElementById('count').innerText = count;
}

function decreaseCount(){
    if(count == 0){
        return ;
    }
    count--;
    document.getElementById('count').innerText = count;
}


function resetCount(){
    count = 0;
    document.getElementById('count').innerText = count;
}

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowDown"){
        decreaseCount();
    }

    if(event.key === "ArrowUp"){
        increaseCount();
    }

    if(event.key === "r" || event.key === "R" ){
        resetCount();
    }
});


var darkmode = document.getElementById('dark-mode-btn');

darkmode.addEventListener('click', function(){
    if(darkmode.innerHTML === "🌑"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkmode.innerHTML = "☀️";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkmode.innerHTML = "🌑";
    }
});

