export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const formattedDay = date.getDate().toString().padStart(2, "0");
  const formattedMonth = date.toLocaleString("es-ES", { month: "long" });
  const formattedYear = date.getFullYear();

  return `${formattedDay} de ${formattedMonth} del ${formattedYear}`;
};
