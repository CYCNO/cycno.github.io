let circle = document.getElementById("torch")
bulb = document.getElementById("switch")
isBtnOn = false
let x = 0
let y = 0
isSliding = true

document.addEventListener("mousemove", (e) => {
  if (isSliding && !isBtnOn) {
    return;
  } else {
    circle.style.maskImage = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, transparent 0%, black 100%)`;
    x = e.clientX
    y= e.clientY
  }
})

function zoomOut() {
  let i = 0;
  isSliding = true
  let interval = setInterval(() => {
    i += 2; 
    circle.style.maskImage = `radial-gradient(circle ${i}vh at ${x}px ${y}px, transparent ${i < 100 ? i : 100}%, black 100%)`;
    if (i >= 200) {
      clearInterval(interval);
      isSliding = false;
      circle.classList.remove("fixed");
    }
  }, 10); 
}

function lightOn() {
  console.log("clicked")
  if (isBtnOn) {
    zoomOut()
  } else {
    circle.classList.add("fixed")
  }
  isBtnOn = !isBtnOn
}
