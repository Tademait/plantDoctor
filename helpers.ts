/**
 * This file contains helper functions especially
 * for text formatting.
 */

export function formatDate(date: Date): string {
  if (!date) {
    return '';
  }
  const date_obj = new Date(date);
  return date_obj.toDateString();
}

export function formatDateLong(date: Date): string {
  if (!date) {
    return '';
  }
  const date_obj = new Date(date);
  return date_obj.toLocaleString('en-US', { weekday: 'long', year: 'numeric',
                                            month: 'long', day: 'numeric',
                                            hour: 'numeric', minute: 'numeric',
                                            second: 'numeric', hour12: false });
}

export function capitalizeWords(str: string): string {
  if (!str) {
    return '';
  }
  return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}