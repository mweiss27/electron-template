const weathers = ["Sunny", "Rainy", "Cloudy", "Snowy", "Windy"]

export const weatherRoute = "/weather"

export const weatherHandler = (req, res) => {
  const weather = weathers[Math.floor(Math.random() * weathers.length)]

  const result = {
    weather,
  }

  res.json(result)
}
