var box = document.getElementById('box');
box.addEventListener('mousemove', runEvent);
box2.addEventListener('mousemove', runEventB);

// box.addEventListener('mouseenter', runEvent);

function runEvent(e) {
  console.log('EVENT TYPE: '+e.type);
  box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",50)"
}

function runEventB(e) {
  console.log('EVENT TYPE: '+e.type);
  document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",200)"

}
