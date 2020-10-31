const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let newArr = [];

  members.forEach(element => {
    if (typeof (element) === 'string' && element !== '') {
      newArr.push(element.trim().toUpperCase().slice(0, 1));
    } else {
      return false;
    }
  });

  return newArr.sort().join('');

};
