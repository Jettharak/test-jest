function nextDate(day, month, year) {
  // check range
  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
  ) {
    return "Value is not an integer";
  }
  if (day < 1 || day > 31) {
    return "day is out of range";
  }
  if (month < 1 || month > 12) {
    return "month is out of range";
  }
  if (year < 1812 || year > 2012) {
    return "year is out of range";
  }

  var nextDay = day;
  var nextMonth = month;
  var nextYear = year;
  var monthOfThirdOne = [1, 3, 5, 7, 8, 10];
  var monthOfThirdZero = [4, 6, 9, 11];
  if (monthOfThirdOne.includes(month)) {
    if (day < 31) {
      nextDay = nextDay + 1;
    } else {
      nextDay = 1;
      nextMonth = nextMonth + 1;
    }
  } else if (monthOfThirdZero.includes(month)) {
    if (day < 30) {
      nextDay = nextDay + 1;
    } else {
      nextDay = 1;
      nextMonth = nextMonth + 1;
    }
  } else if (month == 12) {
    if (day < 31) {
      nextDay = nextDay + 1;
    } else {
      nextDay = 1;
      nextMonth = 1;
      if (year == 2012) {
        return "year 2012 is over";
      } else {
        nextYear = nextYear + 1;
      }
    }
  } else {
    if (day < 28) {
      nextDay = nextDay + 1;
    } else if (day == 28) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        nextDay = nextDay + 1;
      } else {
        nextDay = 1;
        nextMonth = 3;
      }
    } else if (day == 29) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        nextDay = 1;
        nextMonth = 3;
      } else {
        return "invalid input date";
      }
    } else {
      return "invalid input date";
    }
  }
  var output = `nextDate is ${nextDay},${nextMonth},${nextYear}`;
  return output;
}

module.exports = nextDate;
