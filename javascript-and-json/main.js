var books = [
  {
    isbn: '0001',
    title: 'The Bible',
    author: 'Moses'
  },
  {
    isbn: '0002',
    title: 'Harry Potter',
    author: 'Rowling'
  },
  {
    isbn: '0003',
    title: 'LOTR',
    author: 'Tolkien'
  }
];

console.log('books array', typeof (books));

var stringifyResult = JSON.stringify(books);

console.log('stringify', stringifyResult);

var student = '{"numberId":"0001", "student":"damien"}';

console.log('string of student', student);

console.log('typeof student', typeof (student));

var studentObj = JSON.parse(student);

console.log(studentObj);
