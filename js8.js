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
 K=parseFloat($('t2').value);
 Sum=1;
 
              for(i=2;i<=N;i++) 
		   {a=i;
               for(j=2;j<=K;j++)
                    {a=a*i;
                     Sum=Sum+a;}
		$('t3').value=Sum;
    }
