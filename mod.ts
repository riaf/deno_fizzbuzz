export function* fizzbuzz(limit = -1) {
  let i = 1;

  while (i <= limit || limit < 0) {
    if (i % 15 === 0) {
      yield "FizzBuzz";
    } else if (i % 3 === 0) {
      yield "Fizz";
    } else if (i % 5 === 0) {
      yield "Buzz";
    } else {
      yield i;
    }

    i++;
  }
}
