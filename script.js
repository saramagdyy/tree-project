let sketch = document.querySelector('.sketch');
let sketch1 = './images/sketch.webp';
let sketch2 = './images/cat.webp'; 

let decoration = document.querySelector('.decorations');
let decoration1 = './images/decoration.webp';
let decoration2 = './images/decoration2.webp'; 

let workshop = document.querySelector('.Workshops');
let workshop1 = './images/workshop.webp';
let workshop2 = './images/workshop2.webp'; 
let workshop3 = './images/workshop3.webp';
setInterval(function() {

    let currentSrc = sketch.src.split('/').pop();
    let currentSrc1 = decoration.src.split('/').pop();
    let currentSrc3 = workshop.src.split('/').pop();
    if (currentSrc == 'sketch.webp') {
        sketch.src = sketch2;
    } else {
        sketch.src = sketch1;
    }

    if (currentSrc1 == 'decoration.webp') {
        decoration.src = decoration2;
    } else {
        decoration.src = decoration1;
    }

    if (currentSrc3 == 'workshop.webp') {
        workshop.src = workshop2;
    } else if( currentSrc3  == 'workshop2.webp'){
        workshop.src = workshop3;
    }else {
        workshop.src = workshop1;
    }
}, 2000); 


let toggler = document.querySelector('.toggler')
let menu = document.querySelector('.links')

toggler.addEventListener('click',function(){

    if(menu.style.display =='none')
    {
        menu.style.display = 'flex'
    }else{menu.style.display = 'none'}

})
