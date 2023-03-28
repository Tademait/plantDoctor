export function formatDate(date) {
  const date_obj = new Date(date);
  return date_obj.toDateString();
}