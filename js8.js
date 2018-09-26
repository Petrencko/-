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
var N;
var K;

N=parseInt($('t1').value);
K=parseInt($('t2').value);
A=1
while (k<=K, n<=N, k++, n++;)
{A=1^k+2^k+...+n^k;
k=K+1;
n=N+1}
$('t4').value=A;
}