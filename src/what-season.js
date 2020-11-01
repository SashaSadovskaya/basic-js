const CustomError = require("../extensions/custom-error");
module.exports = function getSeason( date ) {
  if(typeof(date) == 'undefined')
    return 'Unable to determine the time of year!';
  if(!(Object.prototype.toString.call(date) === "[object Date]") )
    throw new Error();
  const season = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();
  if (month <= 1 || month === 11){
    return season[0];
  }
  else if(month <= 4){
    return season[1]
  }
  else if (month <= 7){
    return season[2]
  }
  else return season[3]
};
