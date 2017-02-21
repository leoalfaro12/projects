var btn = document.getElementById('btn');
var div = document.getElementByTagName('div')
var classes = document.getElementByClassName('list-four')
var lis = document.querySelectorAll('li:nth-child(odd)')
var ul = document. querySelector('ul')
lis.forEach(function(x, y){
  console.log(x);
  if(x.classList.contains('list-four')){
    lis[y].style.backgroundColor
  }
})
console.log(div);
// div.addEventListener('mouseover', function(){
//   alert('hovering the div');
// });
for(var i = 0; i < div.length; i++){
  div[i].addEventListener('mouseover', function(){
    alert('hovering the div');
  });
}

for(var j + 0; j < class.length; j++){
  classes[i].addEventListener('click', function(){
    alert('clicked on the last item')
  });
}


btn.addEventListener('click', function(){
  var user = prompt('Enter a name');
    if(user.length < 5 || user.trim() === ''){
      alert('wrong');
    }else{
      alert(user);
    }


// user.length >= 5 ? alert(user) ! alert('too short')

});

var input = document.querySelector('input[type="text"]');
var inputBtn = document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);
});
