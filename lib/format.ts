function parseDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

export function formatDate(date: string, options?: Intl.DateTimeFormatOptions) {
  return parseDate(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
    ...options,
  })
}

export function formatMonthYear(date: string) {
  return formatDate(date, { day: undefined, month: 'long', year: 'numeric' })
}

export function isUpcoming(date: string, now = new Date()) {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  return parseDate(date).getTime() >= today
}

export function yearsSince(date: string, now = new Date()) {
  const start = parseDate(date)
  let years = now.getUTCFullYear() - start.getUTCFullYear()
  const beforeAnniversary =
    now.getUTCMonth() < start.getUTCMonth() ||
    (now.getUTCMonth() === start.getUTCMonth() && now.getUTCDate() < start.getUTCDate())
  if (beforeAnniversary) years -= 1
  return Math.max(years, 0)
}
