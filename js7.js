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

function f1()
{ 
	N=parseFloat($('t3').value);
A=1; k=1;
for(k=1;k<=N;k++)
{
S=(A+1)/k;
}
$('t2').value=S;
}

