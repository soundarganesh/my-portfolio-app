export const getYearsOfExperience = () => {
  const currentDate = new Date();
  const year = currentDate?.getFullYear();
  const month = currentDate?.getMonth();
  const totalYears = year - 2016;
  return month >= 6 ? totalYears : totalYears - 1;
};
