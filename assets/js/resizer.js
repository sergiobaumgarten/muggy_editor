//make this code only run when is a element with class editavel

const elemento = document.querySelector('.editavel');
if(elemento){
const resizeRange = document.getElementById('sizeRange');
const resizeText = document.getElementById('sizeText');

const elHeight = elemento.offsetHeight;
const elWidth = elemento.offsetWidth;
const elAngle = "0deg";
const elPosition = elemento.getBoundingClientRect();
const elX = elPosition.x;
const elY = elPosition.y;

let isDragging = false;
let currentX =0;
let currentY = 0;
let currentDeg = 0;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

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

rotationRange.addEventListener("input", (e)=>{
    currentDeg = rotationRange.value;
    setTranslate(currentX, currentY, currentDeg, elemento);
})

elemento.addEventListener("mousedown", dragStart);
elemento.addEventListener("mouseup", dragEnd);
elemento.addEventListener("mouseout", dragEnd);
elemento.addEventListener("mousemove", drag);

elemento.addEventListener("touchstart", dragStart);
elemento.addEventListener("touchend", dragEnd);
elemento.addEventListener("touchcancel", dragEnd);
elemento.addEventListener("touchmove", drag);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  
    isDragging = true;
    console.log(e)
  }
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    isDragging = false;
    console.log(e)
  }
  
  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, currentDeg, elemento);
      console.log(e)
    }
  }
  
  function setTranslate(xPos, yPos, deg, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0) rotate(" + deg + "deg)";
  }
}
elemento2 = document.querySelector('.draggable');
  //create a function tha add class to the element on dblclick
  function addClass(){
    elemento2.classList.add('editavel');
  }
  //create a function tha remove class to the element on dblclick
  function removeClass(){
    elemento2.classList.remove('editavel');
  }
  //create a function tha toggle class to the element on dblclick
  function toggleClass(){
    elemento2.classList.toggle('editavel');
  }

  elemento2.addEventListener('dblclick', toggleClass);
