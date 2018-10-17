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
var today=new Date();


function signs()

{
var month=today.getMonth();
  var date=today.getDate();
if (month == 1 && date >=20 || month == 2 && date <=18) {$('r1').value = "Водолей, Воздух";}
if (month == 1 && date > 31) {$('r1').value = "Не понял?";}
if (month == 2 && date >=19 || month == 3 && date <=20) {$('r1').value = "Pыбы, Вода";}
if (month == 2 && date > 29) {$('r1').value = "Чего?";}
if (month == 3 && date >=21 || month == 4 && date <=19) {$('r1').value = "Овен, Огонь";}
if (month == 3 && date > 31) {$('r1').value = "Ну да, конечно.";}
if (month == 4 && date >=20 || month == 5 && date <=20) {$('r1').value = "Tелец, Земля";}
if (month == 4 && date > 30) {$('r1').value = "Извините, пожалуйста!";}
if (month == 5 && date >=21 || month == 6 && date <=21) {$('r1').value = "Близнецы, Воздух";}
if (month == 5 && date > 31) {$('r1').value = "Чаво?.";}
if (month == 6 && date >=22 || month == 7 && date <=22) {$('r1').value = "Рак, Вода";}
if (month == 6 && date > 30) {$('r1').value = "Ну извините!.";}
if (month == 7 && date >=23 || month == 8 && date <=22) {$('r1').value = "Лев, Огонь";}
if (month == 7 && date > 31) {$('r1').value = "Мммм... нет, не скажу!";}
if (month == 8 && date >=23 || month == 9 && date <=22) {$('r1').value = "Дева, Земля";}
if (month == 8 && date > 31) {$('r1').value = "Тупой что ли?";}
if (month == 9 && date >=23 || month == 10 && date <=22) {$('r1').value = "Весы, Воздух";}
if (month == 9 && date > 30) {$('r1').value = "Ни за что!";}
if (month == 10 && date >=23 || month == 11 && date <=21) {$('r1').value = "Скорпион, Вода";}
if (month == 10 && date > 31) {$('r1').value = "Попробуй еще!";}
if (month == 11 && date >=22 || month == 12 && date <=21) {$('r1').value = "Стрелец, Огонь";}
if (month == 11 && date > 30) {$('r1').value = "Забудь!";}
if (month == 12 && date >=22 || month == 1 && date <=19) {$('r1').value = "Козерог, Земля";}
if (month == 12 && date > 31) {$('r1').value = "Никогда!";}
}
