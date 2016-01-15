function getDays() {
  var date = new Date();
  var year = date.getFullYear();
  var mouth = date.getMonth() + 1;
  var days;
  if (mouth == 2) {
    days = year % 4 == 0 ? 29 : 28;
  } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
    days = 31;
  } else {
    days = 30;
  }
  return days;
}