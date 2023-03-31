export function formatDate(date) {
  const date_obj = new Date(date);
  return date_obj.toDateString();
}

export function capitalizeWords(str) {
  if (!str) {
    return '';
  }
  return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}