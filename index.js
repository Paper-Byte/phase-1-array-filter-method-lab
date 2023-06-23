// Code your solution here
const findMatching = (drivers, driverName) => {
  return drivers.filter(
    (driver) => driver.toLowerCase() === driverName.toLowerCase()
  );
};

const fuzzyMatch = (drivers, driverLetters) => {
  return drivers.filter(
    (driver) =>
      driver.charAt(0).toLowerCase() === driverLetters.charAt(0).toLowerCase()
  );
};

const matchName = (drivers, driverName) => {
  return drivers.filter((driver) => driver.name === driverName);
};
