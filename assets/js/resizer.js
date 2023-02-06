const elemento = document.querySelector('.draggable');
const resizeRange = document.getElementById('sizeRange');
const resizeText = document.getElementById('sizeText');

const elHeight = elemento.offsetHeight;
const elWidth = elemento.offsetWidth;
const elAngle = "0deg";
const elPosition = elemento.getBoundingClientRect();
const elX = elPosition.x;
const elY = elPosition.y;

let isDragging = false;
let currentX;
let currentY;
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
  }
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    isDragging = false;
  }
  
  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, currentDeg, elemento);
    }
  }
  
  function setTranslate(xPos, yPos, deg, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0) rotate(" + deg + "deg)";
  }