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
{A=1, k=1 
while (k<=N)
{A=(A+1)/k;
k=k+1}
$('t2').value=A
}

