export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  // Format: "15 de noviembre, 2023"
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("es-ES", options)
}
