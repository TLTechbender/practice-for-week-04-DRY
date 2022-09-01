function multiplyBiggerNumByTwo(num1, num2) {
  if (num1 > num2) {
    return multiplyBig(num1);
  } else {
   return multiplyBig(num2);
  }
}

function multiplyBig(num){
    return num *2;
}

/*****************************************************************************************************/

function divideBiggerNumByThree(num1, num2) {
  if (num1 > num2) {
  return divider(num1);
  } else {
    return divider(num2);
  }
}

function divider(num){
    return num /3;
}



/**************************************************************************************************/
function eatMostTacos(sum1, sum2) {
    if (sum1 > sum2) {
     return tacoChop(sum1);
  } else {
    return tacoChop(sum2);
  }
}

function tacoChop(num){
    return `I ate ${num} tacos.`
}



/*************************************************************************************************/

function adoptSmallerDog(weight1, weight2) {
  if (weight1 < weight2) {
    return takeDog(weight1);
  } else {
    return takeDog(weight2);
  }
}

function takeDog(size){
    return `I adopted a dog that weighs ${size} pounds`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
