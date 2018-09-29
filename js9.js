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
A=parseInt($('t1').value);

var lgth = prompt ('Введите A: ', '');
mark:
for(var i=1; i<lgth; i++) {
 
  for(var j=2; j<i; j++) {
    if ( i % j == 0) continue mark;
  }
   
  alert(i);
}



