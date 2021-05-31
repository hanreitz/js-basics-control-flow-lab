function scuberGreetingForFeet(rideHeight){
  // Write your code here!
  if(rideHeight <= 400) {
    return 'This one is on me!'
  } else if (rideHeight > 2000 && rideHeight <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (rideHeight > 2500) {
    return 'No can do.'
  };
};

function ternaryCheckCity(someCity){
  // Write your code here!
  return (someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.')
};

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
    return 'Bye.'
  };
};