var yay = new Audio("other/yay.m4a")
var boo = new Audio("other/boo.m4a")

function submit(){
if (document.getElementById("answer").innerHTML == document.getElementById("ans").value){
document.getElementById("result").innerHTML = "Correct"
totalScore = parseInt(localStorage.Score)+1
localStorage.Score = totalScore
yay.play()}
else{
document.getElementById("result").innerHTML = "Incorrect. Correct answer is "+document.getElementById("answer").innerHTML
boo.play()}
document.getElementById('submit').setAttribute('hidden','hidden')
document.getElementById('next').removeAttribute('hidden')}

function next(){location.reload()}

var num1 = Math.ceil(Math.random()*12)
var num2 = Math.ceil(Math.random()*12)
var num3 = Math.ceil(Math.random()*50)
var num4 = Math.ceil(Math.random()*50)
