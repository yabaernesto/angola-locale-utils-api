function formatDateAO(
  date: Date,
  format = 'DD/MM/YYYY',
  includeTime = false
): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())

  let formattedDate: string

  switch (format) {
    case 'MM/DD/YYYY':
      formattedDate = `${month}/${day}/${year}`
      break
    case 'YYYY-MM-DD':
      formattedDate = `${year}-${month}-${day}`
      break
    case 'extenso':
      const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ]
      formattedDate = `${day} de ${months[date.getMonth()]} de ${year}`
      break
    default:
      formattedDate = `${day}/${month}/${year}`
  }

  if (includeTime) {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = '00'

    const formattedTime = `${hours}:${minutes}:${seconds}`
    formattedDate += ` ${formattedTime}`
  }

  return formattedDate
}

export { formatDateAO }
