module.exports = function reverse (n) {
  const num = (n > 0) ? n : (n * -1);
  const reverse = parseInt(num.toString().split('').reverse().join(''),10);
  return reverse;
}
