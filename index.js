// code your solution here
function saturdayFun(myactivity="roller-skate"){

    return `This Saturday, I want to ${myactivity}!` ;
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}
let wrapAdjective = function(star="*") {
    return function(myAdjective="special") {
      return `You are ${star}${myAdjective}${star}!`
    }
  }