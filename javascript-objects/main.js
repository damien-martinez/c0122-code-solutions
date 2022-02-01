var student = {
  firstName: 'Damien',
  lastName: 'Martinez',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'recruiter';
console.log('student.livesInIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation: ', student.previousOccupation);

console.log('value of student object', student);

var vehicle = {
  make: 'toyota',
  model: 'yaris',
  year: 2014
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log("vehicle['color']: ", vehicle['color']);
console.log("vehicle['isConvertible']: ", vehicle['isConvertible']);

console.log('value of vehicle object', vehicle);

var pet = {
  name: 'bella',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet object', pet);
