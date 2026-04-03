export function dateKoFormat(date: string) {
  const dateObject = getKstDate(date);
  return `${dateObject.getFullYear()}년 ${dateObject.getMonth() + 1}월 ${dateObject.getDate()}일`;
}

export function dateFormat(date: string) {
  const dateObject = new Date(date);
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  return `${dateObject.getFullYear()}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`;
}

export function timeFormat(date: string) {
  const dateObject = getKstDate(date);
  return `${pad(dateObject.getHours())}:${pad(dateObject.getMinutes())}`;
}

function pad(value: number) {
  return value < 10 ? `0${value}` : `${value}`;
}

function getKstDate(date: string) {
  const dateObject = new Date(date);
  return new Date(dateObject.getTime() + 9 * 60 * 60 * 1000);
}
