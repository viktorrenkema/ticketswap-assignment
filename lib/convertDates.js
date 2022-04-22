// Function that converts the new Date() to more readable format (e.g. 03 09 2021). Used for the "Datum" heading.
const convertDate = inputFormat => {
  const d = new Date(inputFormat)
  function pad(s) {
    return s < 10 ? '0' + s : s
  }
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(' ')
}

const getNumberOfDay = day => {
  const firstTwo = day.substring(0, 2)
  // Get the first character of the day number
  const firstOne = firstTwo.substring(0, 1)

  let dayNumber

  if (firstOne === '0') {
    dayNumber = day.substring(1, 2)
  } else {
    dayNumber = firstTwo
  }
  return dayNumber
}

const getNameOfMonth = day => {
  // `Day` input takes on a certain format, example: 2021-03-27T20:00:00+01:00

  // If we take the two values in that format that represent the month:
  const monthNumber = day.substring(3, 5)

  // And then get the first character of the month number...
  const firstChar = monthNumber.substring(0, 1)

  // We can then check if the 1st character is a zero, and then remove it.
  let monthNumberToConvert
  if (firstChar === '0') {
    monthNumberToConvert = monthNumber.substring(1, 2)
  } else {
    monthNumberToConvert = monthNumber
  }
  // Finally, we get a value between 1 and 12 that we transform to the calendar month in letters
  let month

  switch (parseInt(monthNumberToConvert, 10)) {
    case 1:
      month = 'Januari'
      break
    case 2:
      month = 'Februari'
      break
    case 3:
      month = 'Maart'
      break
    case 4:
      month = 'April'
      break
    case 5:
      month = 'Mei'
      break
    case 6:
      month = 'Juni'
      break
    case 7:
      month = 'Juli'
      break
    case 8:
      month = 'Augustus'
      break
    case 9:
      month = 'September'
      break
    case 10:
      month = 'Oktober'
      break
    case 11:
      month = 'November'
      break
    case 12:
      month = 'December'
      break
  }
  return month
}

export { getNumberOfDay, getNameOfMonth, convertDate }
