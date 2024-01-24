const dice = document.getElementById('dice');
const button = document.getElementById('roll-button');

function rollDice(){
    const result = Math.floor(Math.random() * 6) + 1;

    const diceFace = getDiceFace(result);
    dice.innerHTML = diceFace;
}

function getDiceFace (result){
    if(result == 1){
        return '&#9856';
    }else if (result == 2){
        return '&#9857';
    }else if (result == 3){
        return '&#9858';
    }else if (result == 4){
        return '&#9859';
    }else if (result == 5){
        return '&#9860';
    }else if (result == 6){
        return '&#9861';
    }else{
        return ' '
    }
}

button.addEventListener('click', ()=>{
    dice.classList.add('animate');
    setTimeout(()=>{ dice.classList.remove('animate');
    rollDice()
},1000)
})