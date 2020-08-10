var score = 0;
function check()
{
    var rightQ1 = document.getElementById("q1_a1");
    
    if(rightQ1.checked==true)
{
    alert("Q1 Answer is right");
    score++;
}
else alert("Q1 Answer is wrong");
  
  
var rightQ2 = document.getElementById("q2_a2");
if(rightQ2.checked==true)
{
    alert("Q2 Answer is right");
    score++;
}
else alert("Q2 Answer is wrong");
var rightQ3 = document.getElementById("q3_a3");
if(rightQ3.checked==true)
{
    alert("Q3 Answer is right");
    score++;
}
else alert("Q3 Answer is wrong");
var rightQ4 = document.getElementById("q4_a1");
if(rightQ4.checked==true)
{
    alert("Q4 Answer is right");
    score++;
}
else alert("Q4 Answer is wrong");
var rightQ5 = document.getElementById("q5_a3");
if(rightQ5.checked==true)
{
    alert("Q5 Answer is right");
    score++;
}
else alert("Q5 Answer is wrong");
var rightQ6 = document.getElementById("q6_a2");
if(rightQ6.checked==true)
{
    alert("Q6 Answer is right");
    score++;
}
else alert("Q6 Answer is wrong");


alert("Your score is " + score);
} 