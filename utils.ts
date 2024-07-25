export const format = (value: number): string => {
	let parts = value.toFixed(2).toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.');
	return parts.join(',');
}

export const formatAlt = (value: number): string => {
	let parts = value.toFixed(2).toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');
	return parts[0]/*parts.join('.')*/;
}

export const formatDateDay = (date: number): string => {
  return new Date(date).toLocaleDateString('en-us', {  weekday: 'long', month: 'long', day: 'numeric' });
}

export const formatHours = (date: number): string => {
  return new Date(date).toLocaleTimeString('en-US');
}