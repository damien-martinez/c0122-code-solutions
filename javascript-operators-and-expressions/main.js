var width = 4;
var height = 4;

var area = width * height;
console.log('area: ', area);
console.log('typeOf: ', typeof (area));

var bill = 10;
var payment = 20;

var change = payment - bill;
console.log('change: ', change);
console.log('typeOf: ', typeof (change));

var quizzes = 10;
var midterm = 20;
var final = 2;

var grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('typeOf: ', typeof (grade));

var firstName = 'Damien ';
var lastName = 'Martinez';

var fullName = firstName + lastName;
console.log('fullName: ', fullName);
console.log('typeOf:', typeof (fullName));

var pH = 1;

var isAcidic = pH < 7;
console.log('isAcidic: ', isAcidic);
console.log('typeOf: ', typeof (isAcidic));

var headCount = 18;

var isSparta = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('typeOf:', typeof (isSparta));

var motto = fullName;
motto = motto + ' is the GOAT';
console.log('motto:', motto);
console.log('typeOf: ', typeof (motto));
