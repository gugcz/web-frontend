const moment = require('moment');

function isMultiDayEvent(dates) {
  return !moment(dates.start).isSame(dates.end, 'day');
}

exports.getEventDates = function (event) {
  if (isMultiDayEvent(event.datesFilter)) {
    return {
      isMultiDay: true,
      datesAndTimes: getDate(event.datesFilter.start) + ' (' + getTime(event.datesFilter.start) + ') - ' + getDate(event.datesFilter.end) + ' (' + getTime(event.datesFilter.end) + ')',
    };
  } else {
    return {
      isMultiDay: false,
      date: getDate(event.datesFilter.start),
      time: getTimeForSingleDayEvent(event.datesFilter),
    };
  }
};

function getDate(date) {
  return moment(date).format('D.M.Y'); // date.getMonth() + 1 cause of months are 0...11
}

function getTime(date) {
  return moment(date).format('HH:mm');
}

function getTimeForSingleDayEvent(dates) {
  return getTime(dates.start) + ' - ' + getTime(dates.end);
}
