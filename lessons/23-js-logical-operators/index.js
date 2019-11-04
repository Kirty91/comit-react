let currentHour = prompt('enter current hour 0-24', '');
if (currentHour < 0 || currentHour>23) {
  alert( `${currentHour} is incorrect input`);
} 
if (currentHour<8 || currentHour>=18) {
    alert( `${currentHour} is outside of office hour`);
} 
if(currentHour>=8 && currentHour<18) {
    alert( `We are open`);
}