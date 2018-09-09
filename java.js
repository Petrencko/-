﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  


function g()
{
$("t1").style.color="red";
 
}

function g1()
{
$("t1").style.color="blue";
 
}

function g2()
{
$("t1").style.color="green";
 
}

function g3()
{
$("t1").style.color="yellow";
 
}

function g4()

{
document.getElementById("area1").value="Добрый день!";
 
}


