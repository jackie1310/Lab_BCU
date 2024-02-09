function calculateAge(birthdate) {
    const parsedBirthdate = new Date(birthdate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    const age = currentDate.getFullYear() - parsedBirthdate.getFullYear();
    const hasBirthdayOccurred =
    currentDate.getMonth() > parsedBirthdate.getMonth() ||
    (currentDate.getMonth() === parsedBirthdate.getMonth() &&
      currentDate.getDate() >= parsedBirthdate.getDate());

  // Adjust age based on whether the birthday has occurred this year
  return hasBirthdayOccurred ? age + 1 : age;
}
module.exports = calculateAge;