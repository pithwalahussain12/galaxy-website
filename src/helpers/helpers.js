export function returnPrintMonth(month) {
  switch (month) {
    case 0:
      return "JAN";
    case 1:
      return "FEB";
    case 2:
      return "MAR";
    case 3:
      return "APR";
    case 4:
      return "MAY";
    case 5:
      return "JUN";
    case 6:
      return "JUL";
    case 7:
      return "AUG";
    case 8:
      return "SEP";
    case 9:
      return "OCT";
    case 10:
      return "NOV";
    case 11:
      return "DEC";
    default:
      return new Error("Unexpected date");
  }
}

export function organizeEvents(events) {
  const eventsByMonth = {
    january: [],
    february: [],
    march: [],
    april: [],
    may: [],
    june: [],
    july: [],
    august: [],
    september: [],
    october: [],
    november: [],
    december: [],
  };

  events.map((event) => {
    switch (event.month) {
      case 0:
        return eventsByMonth.january.push(event);
      case 1:
        return eventsByMonth.february.push(event);
      case 2:
        return eventsByMonth.march.push(event);
      case 3:
        return eventsByMonth.april.push(event);
      case 4:
        return eventsByMonth.may.push(event);
      case 5:
        return eventsByMonth.june.push(event);
      case 6:
        return eventsByMonth.july.push(event);
      case 7:
        return eventsByMonth.august.push(event);
      case 8:
        return eventsByMonth.september.push(event);
      case 9:
        return eventsByMonth.october.push(event);
      case 10:
        return eventsByMonth.november.push(event);
      case 11:
        return eventsByMonth.december.push(event);
      default:
        return new Error("Wrong date");
    }
  });
  return eventsByMonth;
}
