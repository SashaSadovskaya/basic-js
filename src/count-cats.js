const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let cats = 0;
  for(const i of matrix)
    for(const n of i)
      if(n === '^^')
        cats++;
  return cats
};
