var now = new Date;
var date = String(now.getDate()).padStart(2, '0');
var month = String(now.getMonth() + 1).padStart(2, '0');
var day = now.getDay();
var year = now.getFullYear();
console.log(date);
console.log(month);
console.log(day);
console.log(year);
console.log("".concat(date, "-").concat(month, "-").concat(year));
