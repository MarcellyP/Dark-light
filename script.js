const check= document.querySelector('.checkbox');
const body = document.querySelector('body');


check.onclick = function(){
  body.classList.toggle('dark');
}