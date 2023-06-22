export const getArrayOfDeliveryHours = (timestamp) => {
  let arrayOfHours = [];
  //Если в функцию не передаётся timestamp, то
  //Добавить в массив часы доставки, начиная с текущего часа времени + 3 часа.
  if (!timestamp) {
    const currentDate = new Date();
    const currentDayHourWithHourShift = currentDate.getHours() + 3;
    for (let i = currentDayHourWithHourShift; i <= 23; i++) {
      arrayOfHours.push(new Date().setHours(i, 0, 0, 0));
    }
  }
  if (timestamp) {
    const nextDays = new Date(timestamp);
    for (let i = 11; i <= 23; i++) {
      arrayOfHours.push(new Date(nextDays).setHours(i, 0, 0, 0));
    }
  }

  return arrayOfHours;
};
