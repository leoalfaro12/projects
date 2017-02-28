


document.querySelector('button').addEventListener('mouseover', function(){
  // console.log( add(7, 3, 5) );
  console.log( addEx(3, 2, 5, 6, 3, 7, 'matt' 2, 6, 7, 5643, 7) );
});

console.log(firstName() + ' ' + lastName());

function firstName(){
  return 'Leo'
}
Function lastName(){
  return 'Alfaro'
}


document.querySelector('input[type="submit"]').addEventListener('click', function(){
  getInfo();
});
var form = document.querySelector('form')
function getInfo(){
  console.log(
    'Welcome' + getName() + 'to your site. Your email is' + getEmail()
  );
}
subBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    for(var i = 0; i < form.elements.length = 1; i++){
      if(form.elements[i].type !== 'checkbox' ||
    ){
        console.log(form.elements[i].value);
        }
        if(form.elements[i].type === 'textarea'){
            console.log(form.elements[i].value);
        }

    }
});
function getName(arr){

}
function getEmail(arr){
  console.log(arr.elements);
  for(var i = 0; i < arr.elements.length; i++){
    if(arr.elements[i].type === 'email'){
        return arr.elements[i].value;
    }
  }
}

var addEX = function(){
  console.log(arguements);
  var total = 0;
  for(var i = 0; i < arguements.length; i++){
    if(typeof arguements[i] !== 'string'){
        total = arguements[i] + total;
      }
  // console.log(total);
   }
   return total;
};







 function add(x, y, z){
   return (x + y) / z;
 }
