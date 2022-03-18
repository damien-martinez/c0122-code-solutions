let count = 3;

const stop = setInterval(() => {
  if (count === 0) {
    console.log('blast off!');
    clearInterval(stop);
  } else {
    console.log(count);
    count--;
  }
}, 2000);
