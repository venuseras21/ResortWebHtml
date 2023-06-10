var circle = document.getElementById("circle");
var aboutbtnUp = document.getElementById("aboutbtnUp");
var aboutbtnDown = document.getElementById("aboutbtnDown");

var rotateValue = circle.style.transform;
var rotateSum;
aboutbtnUp.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
aboutbtnDown.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
