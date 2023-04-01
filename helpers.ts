export function formatDate(date: Date): string {
  if (!date) {
    return '';
  }
  const date_obj = new Date(date);
  return date_obj.toDateString();
}

export function capitalizeWords(str: string): string {
  if (!str) {
    return '';
  }
  return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}