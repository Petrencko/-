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
 K=1;
 S=0;
                while((K<=N)&&(S<N))
		{S=S+K;	
		       K=K+1;}
                       
 
		 $('t2').value=(K-1)+' '+S;
                             

 }
