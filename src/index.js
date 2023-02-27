module.exports = function toReadable (num) {
  let basicNum = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
  ]);
  
    let result = [];
    if (num === 0) {
      return "zero";
    } else if (num % 100 <= 20) {
      result.unshift(basicNum.get(num % 100));
    } else {
      result.unshift(num % 10 === 0 ? '' : basicNum.get(num % 10))
      result.unshift(basicNum.get((Math.floor(num / 10) % 10) * 10));
    }
  
    if (num >= 100) {
      result.unshift('hundred');
      result.unshift(basicNum.get(Math.floor(num / 100)))
    }
    return result.join(' ').trim();
}
