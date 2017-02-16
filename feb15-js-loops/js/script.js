var myArr = ['red', 'orange', 'yellow'];
var newArray = []

var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');

 addBtn.addEventListener('click', function(){
   alert('hey there');
 });
 removeBtn.addEventListener('click', function(){
  alert('bye');
 });
 function askForColor(){
   var userColor = prompt('gimme da color');
   if(userColor !== null && userColor.trim() !== '' ){
     var userColorCheck = userColor.toLowerCase().trim();
     if( !isNAN(parseInt(userColorCheck)) ){
       askForColor();
     }else{
       newArray.push(userColorCheck);
       console.log(newArray);
     }
   }else{
     alert('does it work?')
   }





  //  if( !isNaN(parseInt(userColor)) ){
  //    alert('That is not a number');
  //    askForColor();
  //  }else if(userColor === ''){
  //     alert('you typed red');
  //  }else{
  //   alert('you typed a string');
  // }
  /*
   if( !isNaN(parseInt(userColor) ) ){
       alert('will always run!');
   }else{
       alert('will never run')
   }
 */
