var winW = document.querySelector('#project li:nth-child(1) span'),
    winH = document.querySelector('#project li:nth-child(2) span'),
    heroH = document.querySelector('#project li:nth-child(3) span');


    winW.textContent = winWidth;
    winH.textContent = winHeight;
    heroH.textContent = heroHeight;

    if(window.innerHeight > sec1.offsetTop){
      sec1.classList.add('visible');
    }

    window.addEventListener('rezize', function(){
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      heroHeight = hero.clientHeight;
});
