const {differenceInDays, parse, setYear } = require('date-fns');

function calculateDaysUntilNextBirthday(birthdate) {
  // Parse the birthdate
  const parsedBirthdate = parse(birthdate, 'yyyy-MM-dd', new Date());

  // Get the current date
  const currentDate = new Date();

  // Set the birthdate for the current year
  const nextBirthday = setYear(parsedBirthdate, currentDate.getFullYear());

  // Calculate the difference in days
  const daysUntilNextBirthday = differenceInDays(nextBirthday, currentDate);

  // If the birthday has already occurred this year, set it for next year
  if (daysUntilNextBirthday < 0) {
    const nextYearBirthday = setYear(parsedBirthdate, currentDate.getFullYear() + 1);
    return differenceInDays(nextYearBirthday, currentDate);
  }

  return daysUntilNextBirthday;
};
module.exports = calculateDaysUntilNextBirthday;