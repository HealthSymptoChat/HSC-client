export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatDate(date: Date): string {
  // change date and time from gmt to utc + 7
  const dateObj = new Date(date);
  dateObj.setHours(dateObj.getHours() - 7);
  return dateObj.toLocaleString("vi-VN");
}
