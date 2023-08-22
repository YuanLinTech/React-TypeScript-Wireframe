import { TISODate, TISODateTime } from "../Model/dateFormat";

export const formatTISODateTime = (date: string | Date): TISODateTime => {
  const convertedDate: Date = typeof date === "string" ? new Date(date) : date;
  return convertedDate.toISOString() as TISODateTime;
};
export const formatTISODate = (date: string | Date): TISODate => {
  const convertedDate: Date = typeof date === "string" ? new Date(date) : date;
  const day = convertedDate.getDate();
  const month = convertedDate.getMonth() + 1;
  const year = convertedDate.getFullYear();
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}` as TISODate;
};
