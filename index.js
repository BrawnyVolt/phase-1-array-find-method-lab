// const { prototype } = require("mocha");

// function superbowlWin(record){
// // prototype.find(record)
// record.find(element => "W")             //record.year.result

// }

// // function superbowlWin(element, index, record) {
// return (result === 'W')
// }


// record.find(superbowlWin)






//record.find(superbowlWin)


// // example given
// function isOdd(element, index, array) {
//   return (element % 2 === 1);
// }



// declare a function that takes in an array of football team records
function superbowlWin(recordsArr) {
  // use the Array.prototype.find method to find the first record where the result is an 'W'
  // save the finding result to a variable called 'recordThatTeamWon'
  let recordThatTeamWon = recordsArr.find(record => record.result === 'W');

  if (recordThatTeamWon === undefined || recordThatTeamWon === 'L') {
    return undefined;
  }

  // access the 'year' property within the 'recordThatTeamWon' object
  // save result to 'yearThatTeamWon' variable
  let yearThatTeamWon = recordThatTeamWon.year;
  
  // return 'yearThatTeamWon' variable
  return yearThatTeamWon;
}


// 1) returns undefined if the record has no win objects