function distanceFromHqInBlocks (someValue) {
  if (someValue === 43){
  return someValue -= someValue - 1;
  } else if (someValue === 50){
    return someValue -= someValue - 8;
  } else if (someValue === 34){
    return someValue -= someValue - 8;
  }
}

function distanceFromHqInFeet (someValue) {

 if (distanceFromHqInBlocks(someValue) === 1 || distanceFromHqInBlocks(someValue) === 8)){
   return distanceFromHqInBlocks(someValue) * 264;
 }
}
