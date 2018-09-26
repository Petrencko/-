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
var A;
var B;

A=parseInt($('t1').value);
B=parseInt($('t2').value);
A<B
while ()
{Z=;
}
$('t4').value=Z;
}