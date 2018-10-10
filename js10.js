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
sum=0;
for(i=0; i<=K; i++)
{ sum=sum+i;
}	
{N=parseFloat($('t1').value);
                       K=1;
                while(sum<=N)
		       K++;
                       K--;
		 $('t2').value=K;
                             

 }
