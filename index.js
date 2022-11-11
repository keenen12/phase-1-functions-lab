// Code your solution in this file!

function distanceFromHqInBlocks(start) {
  if (start > 42) {
    return start - 42;
  } else if (start < 42) {
    return 42 - start;
  }
  
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, end) {
  if(start > end) {
    return (start - end) * 264;
  } else if (start < end) {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance-400) *.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';

  }

}
 

