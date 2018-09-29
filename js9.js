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
{A=parseFloat($('t1').value);
 B=parseFloat($('t2').value);
 
                     for(i=A;i<=B;i++) 
		       
                     { 
                      for(j=0;j<i;j++)
                     { $('t3').value=i+" ";
		  	}
                        
}


