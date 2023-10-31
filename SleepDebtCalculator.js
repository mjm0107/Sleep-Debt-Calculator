const getSleepHours = day => {
  if(day === 'monday') {
    return 8;
  } else if(day === 'tuesday') {
    return 7;
  } else {

  }

  switch(day) {
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 7 
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 8
    break;
    case 'friday':
    return 8
    break;
    case 'saturday':
    return 7
    break;
    case 'sunday':
    return 8
    break;
    default:
    return "Error!"
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = 
  getActualSleepHours();
  const idealSleepHours =
  getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log("You get the ideal amount of sleep!");
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours -idealSleepHours} hours more sleep than needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get ${idealSleepHours - actualSleepHours} more hours of sleep.`)
  } else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDebt();
