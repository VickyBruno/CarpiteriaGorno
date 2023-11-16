/*PRIMER CARRUSEL*/
const sliderOne = document.querySelector("#first-slider");
let firstSliderSection =  document.querySelectorAll(".first-slider-section");
let firstSliderSectionLast =  firstSliderSection[firstSliderSection.length - 1];

const btnLeftOne = document.querySelector('#first-btn-left');
const btnRightOne = document.querySelector("#first-btn-right");

sliderOne.insertAdjacentElement('afterbegin', firstSliderSectionLast);


//MOVIMIENTO AUTOMÁTICO (separado de los botones para tener dos efectos)
let firstAutocarrusel = setInterval(function(){
firstAutomaticRight();
}, 4000);

function firstAutomaticRight() {
let firstSliderSectionFirst = document.querySelectorAll(".first-slider-section")[0];
sliderOne.style.marginLeft = "-200%";
sliderOne.style.transition = "all 2s ease-in-out";
setTimeout(function(){
sliderOne.style.transition = 'none';
sliderOne.insertAdjacentElement('beforeend', firstSliderSectionFirst);
sliderOne.style.marginLeft = '-100%';
}, 2000); //tiene que ser el mismo tiempo que la transicion (le borre: ",500"), ver como hacer la trasicion, pero sin que se desajuste el timing
}

/*ease-in-out*/
//BOTONES Y RESETEO DEL TIEMPO - FUNCION DE MOVIMIENTO DE LOS BOTONES

btnRightOne.addEventListener('click', function(){
firstNextRigth();
clearInterval(firstAutocarrusel);
firstAutocarrusel = setInterval(function(){
firstAutomaticRight();
}, 4000);
});

btnLeftOne.addEventListener('click', function(){
firstNextLeft();
clearInterval(firstAutocarrusel);
firstAutocarrusel = setInterval(function(){
firstAutomaticRight();
}, 4000);
});


function firstNextRigth(){
let sliderSectionFirst = document.querySelectorAll(".first-slider-section")[0];
sliderOne.style.marginLeft = "-200%";
sliderOne.style.transition = "all .5s ";
setTimeout(function(){
sliderOne.style.transition = 'none';
sliderOne.insertAdjacentElement('beforeend', sliderSectionFirst);
sliderOne.style.marginLeft = '-100%';
}, 500); //tiene que ser el mismo tiempo que la transicion
}

function firstNextLeft(){
let sliderSection =  document.querySelectorAll(".first-slider-section");
let sliderSectionLast =  sliderSection[sliderSection.length - 1];
sliderOne.style.marginLeft = "0";
sliderOne.style.transition = "all .5s";
setTimeout(function(){
sliderOne.style.transition = 'none';
sliderOne.insertAdjacentElement('afterbegin', sliderSectionLast);
sliderOne.style.marginLeft = '-100%';
}, 500);  
}





