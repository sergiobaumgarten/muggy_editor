const elemento = document.querySelector('.draggable');
const resizeRange = document.getElementById('sizeRange');
const resizeText = document.getElementById('sizeText');

const elHeight = elemento.offsetHeight;
const elWidth = elemento.offsetWidth;
const elAngle = "0deg";
const elPosition = elemento.getBoundingClientRect();
const elX = elPosition.x;
const elY = elPosition.y;
resizeRange.addEventListener("input", (e)=>{
    resizeText.innerText = `${elHeight, elWidth}`
    //show the resizeRange value in the resizeText on every mouse move
    let newHeight = elHeight * (resizeRange.value / 100);
    let newWidth = elWidth * (resizeRange.value / 100);
    resizeText.innerText = `${newHeight}`
    elemento.style.height = newHeight + 'px';
    elemento.style.width = newWidth + 'px';
})

const rotationRange = document.getElementById('rotationRange');
//const elAngle = elemento.style.transform;

rotationRange.addEventListener("input", (e)=>{
    elemento.style.transform = `rotate(${rotationRange.value}deg)`;
    elemento.style.translate = `translate(${elX}px, ${elY}px)`;
})