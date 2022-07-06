function scuberGreetingForFeet(numberOfFeet){
  if(numberOfFeet <= 400){ 
  return `This one is on me!`;
  } 
   else if(numberOfFeet <= 2000) {
  return `That will be twenty bucks.`;
  } 
   else if(numberOfFeet <= 2500) {
    return `I will gladly take your thirty bucks.`
}
else return `No can do.`
}

function ternaryCheckCity(city){
  return (city === "NYC" ? 'Ok, sounds good.' : 'No go.')
}

// condition ? exprIfTrue : exprIfFalse


function switchOnCharmFromTip(tips){

  

  switch (tips) {
    case `generous`:
      return "Thank you so much.";
      break;
       case 'not as generous':
        return "Thank you.";
        break;
        default:
          return 'Bye.';
          break;
  }
}