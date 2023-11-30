const baseUrl = "http://localhost:3000"

export const getRoute = route => {
  if (!route.startsWith("/")) route = `/${route}`

  return `${baseUrl}${route}`
}
