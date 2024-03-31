let circle = document.getElementById ("circle");
let upbtn =  document.getElementById ("upbtn");
let downbtn =  document.getElementById ("downbtn");
 let rotateValue = circle.style.transform;
 let rotateSum; 
 
 
 upbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)" ;
    circle.style.transform = rotateSum;
    rotateValue  = rotateSum; 
 };
 downbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)" ;
    circle.style.transform = rotateSum;
    rotateValue  = rotateSum; 
 };

 let loader = document.getElementById ("preloader");
 window.addEventListener("load", function(){
    loader.style.display = "none";
 })