for (var i = 0; i < 5; i++) {
  setTimeout(test, 1000);
}

function test(j) {

  console.log(j);
}

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }
