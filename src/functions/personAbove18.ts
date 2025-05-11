export const personAbove18 = (number: string) => {
  if (number.length < 10) {
    return true;
  }

  const year = parseInt(number.substring(0, 4));
  const month = parseInt(number.substring(4, 6));
  const day = parseInt(number.substring(6, 8));

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const isMonthAndDayPast =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

  return age > 18 || (age === 18 && isMonthAndDayPast);
};
