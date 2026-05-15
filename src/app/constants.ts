export const teamJoinUrl = "https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1";
export const registrationDate = new Date("2026-11-04T11:00:00");
export const raceDate = new Date("2027-05-09T13:00:00");

const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export const formatDateShort = (date: Date) =>
  `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;

export const formatDateTimeShort = (date: Date) =>
  `${formatDateShort(date)} • ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")} Uhr`;

export const formatDateLong = (date: Date) =>
  `${String(date.getDate()).padStart(2, "0")}. ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
