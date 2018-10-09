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
{N=parseFloat($('t1').value);
                       K=0;
                       Sum=0;
                   for(i=0; i<=K; i++;)
                       {
                          Sum=Sum+i;
                       }
                while( Sum<=N)
                       K++;
                       i++;
		 $('t2').value=K;
                             

 }
