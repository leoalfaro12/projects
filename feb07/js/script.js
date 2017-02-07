// var students = ['matt', 'david', 'haley', 'marissa', 'micalea', 'osvaldo', 'rose', 'alfredo', 'rigo', 'leo', 'gus', 'eric', 'kevin', 'monty', 'cobi', 'josh'];

// function randomStudent(){
//   var numStudents = students.length;
//   var randstudent = Math.ceil(
//   Math.random() * numStudents ) - 1;
//   alert( sudents[randstudent] )

var classes = ['Hunter', 'Siren',
'Soldier', 'Bezerker', 'Commando',
'Assassin', 'Gunzerker', 'Psycho',];
// console.log(classes);

//push - adds to end
classes.push('Mechromancer')
// console.log(classes)

var lastClass = classes.pop();
// console.log(classes);
// console.log(lastClass);

classes.unshift('Gunslinger');
// console.log(classes)

var firstClass = classes.shift();
// console.log(classes)
// console.log(firstClass);

var posClass = classes.indexOf('Berzerker')
// console.log(posClass);

var remClass = classes.splice(1, 1)
// console.log(remClass);
// console.log(classes);

// console.log(copyClass);
// console.log(classes);

var copyClass = classes.slice(2, 3);

var subject = ['Econ']
console.log(subject);

subject.push('English', 'Math')
console.log(subject);

subject.unshift('Science', 'History')
console.log(subject);

subject.sort();
subject.reverse();
var sliceSubject = subject.slice(3, 4)
console.log(sliceSubject);
console.log(subject);
