function $() 
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
function f(){
	
	var t = setInterval("g()",2000);
}
function g()
{var x1=window.getComputedStyle($('v1'), null);
var y1=x1.zIndex;
var y2=x2.zIndex;
var y3=x3.zIndex;
var x = y1
$('v1').style.zIndex =y2;
}
