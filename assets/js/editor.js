function heightResize(){
  const div = document.getElementById("arte");
    const rect = div.getBoundingClientRect();
    let divWidth = rect.width;
    let divHeight = rect.height;

    div.style.height = `${divWidth - (divWidth*0.55)}px`;
    document.getElementById("logText").innerText = `${divWidth - (divWidth*0.55)}`;
}



heightResize();
window.addEventListener('resize', heightResize);

const draggable = document.querySelector(".draggable");
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

draggable.addEventListener("mousedown", dragStart);
draggable.addEventListener("mouseup", dragEnd);
draggable.addEventListener("mouseout", dragEnd);
draggable.addEventListener("mousemove", drag);

draggable.addEventListener("touchstart", dragStart);
draggable.addEventListener("touchend", dragEnd);
draggable.addEventListener("touchcancel", dragEnd);
draggable.addEventListener("touchmove", drag);

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

    setTranslate(currentX, currentY, draggable);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}