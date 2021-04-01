import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
export default function getDayList(
  year: number,
  month: number
): {
  day: number
  year: number
  month: number
  isCurrentMonth: boolean
}[] {
  let dayList = Array.from({ length: 42 }, () => ({
    day: 1,
    year: year,
    month: month,
    isCurrentMonth: true,
  }))
  const startDate = startOfWeek(new Date(year, month, 1))

  return dayList.map((_, index) => {
    const currentDay = addDays(startDate, index)

    return {
      day: currentDay.getDate(),
      year: currentDay.getFullYear(),
      month: currentDay.getMonth(),
      isCurrentMonth: currentDay.getMonth() === month,
    }
  })
}
