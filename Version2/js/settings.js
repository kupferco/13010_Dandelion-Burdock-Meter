
//// Dates are formatted like this:
//var startDate = new Date(year, month, day, hours, minutes, seconds, milliseconds); 

// The amount that is added per day
var dailySum = 17643.835

// The offset amount that is based on startDate
var startAmount = 1339041;

// The start date at which the startAmount starts counting. IMPORTANT: months start with 0 for January
var startDate = new Date(2013, 3, 16, 10, 0, 0, 0);
// var startDate = new Date(2013, 3, 10, 11, 20, 0, 0);

// Just for internal purpose. Calculating with this offset a startDate and startSum that lies in the past.
var startOffsetDays = 10;

// Counting starts at this hour per day (currently set to 9 o'clock);
var clockWorkingHoursStart = new Date(0, 0, 0, 9, 0, 0, 0); 
// Counting ends at this hour per day (currently set to 18 o'clock);
var clockWorkingHoursEnd = new Date(0, 0, 0, 18, 0, 0, 0); 

