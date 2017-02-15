var myArr = ['red', 'orange', 'yellow'];
var newArray = []

var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');

 addBtn.addEventListener('click', function(){
   askForColor();
 });
 removeBtn.addEventListener('click', function(){
  // var re = /ab+c/;
  // console.log(re);
  //
  // var myRe = /d(b+)d/g;
  // var myArray = myRe.exec('cdbbdbsbz');
  // console.log(myArray);
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
