function getAvailableSlots(currentHour) {
  if (typeof currentHour !== "number" || currentHour < 0 || currentHour > 23) {
    return "Invalid";
  }

  const slots = [];
  const openingHour = 9;
  const closingHour = 17;

  for (let hour = openingHour; hour < closingHour; hour++) {
    if (hour >= currentHour) {
      const from = formatHour(hour);
      const to = formatHour(hour + 1);
      slots.push(`${from} - ${to}`);
    }
  }

  if (slots.length === 0) {
    return "No slots available";
  }

  return slots;


  function formatHour(hour) {
    if (hour === 12) return "12 PM";
    if (hour === 0 || hour === 24) return "12 AM";
    if (hour > 12) return `${hour - 12} PM`;
    return `${hour} AM`;
  }
}


console.log(getAvailableSlots(8));   
console.log(getAvailableSlots(14));  
console.log(getAvailableSlots(17));  
