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
var x;
var y;
var z;
x=parseInt($('t1').value);
y=parseInt($('t2').value);
z=parseInt($('t3').value);
min=x; t="It`s  x";            
 if(min>y)
{min=y; t="It`s  y";}
 if(min>z)
{min=z; t="It`s  z";}
$('t4').value=min+t;
}
