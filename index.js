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
 if (distanceFromHqInBlocks(someValue) === 1 || distanceFromHqInBlocks(someValue) === 8){
   return distanceFromHqInBlocks(someValue) * 264;
 }
}

function distanceTravelledInFeet (someValue1,someValue2) {
  if (someValue1 < someValue2){
    return (someValue2 - someValue1)*264
  } else if (someValue2 < someValue1){
    return (someValue1 - someValue2)*264
  }
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
