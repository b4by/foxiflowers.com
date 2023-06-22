export const getNextDays = () => {
  return Array(7)
    .fill(new Date())
    .map((el, id) => {
      const today = new Date();
      const nextDate = new Date(today.getTime() + id * 24 * 60 * 60 * 1000);
      return id === 0
        ? {
            id: id,
            timestamp: nextDate.setHours(11, 0, 0, 0),
            monthNum: nextDate.getDate(),
            weekName: nextDate.toLocaleDateString("ru-RU", {
              weekday: "short",
            }),
            selectedDate: "",
          }
        : {
            id: id,
            timestamp: nextDate.setHours(11, 0, 0, 0),
            monthNum: nextDate.getDate(),
            weekName: nextDate.toLocaleDateString("ru-RU", {
              weekday: "short",
            }),
            selectedDate: "",
          };
    });
};
