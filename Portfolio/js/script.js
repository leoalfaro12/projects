var div1 = document.querySelector('div:nth-child(1)'),
    div2 = document.querySelector('div:nth-child(2)'),
    div3 = document.querySelector('div:nth-child(3)');


var dist = 0,
    sec1Height = 0;


window.addEventListener('scroll', function(){
  dist = window.scrollY;
  distance.textContent = dist;




  console.log( (div1.offsetTop - dist) - winHeight );

  if( (div1.offsetTop - dist) - winHeight <= 0 ){
    sec1.classList.add('colorIn');
  }else{
    div1.classList.remove('colorIn')
  }
  if( (div2.offsetTop - dist) - winHeight <= 0 ){
    div2.classList.add('colorIn');
  }else{
    div2.classList.remove('colorIn')
  }
  if( (div3.offsetTop - dist) - winHeight <= 0 ){
    div3.classList.add('colorIn');
  }else{
    div3.classList.remove('colorIn')
  }
});
