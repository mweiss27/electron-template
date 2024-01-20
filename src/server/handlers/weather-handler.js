import { connection } from "../db/db"
import { addressesTableDefinition } from "../db/tables/addresses"
import { statesTableDefinition } from "../db/tables/states"

const weathers = ["Sunny", "Rainy", "Cloudy", "Snowy", "Windy"]

export const weatherRoute = "/weather"

export const weatherHandler = async (req, res) => {
  fetch("https://google.com")
    .then(google => {
      console.log(google)

      fetch("https://amazon.com")
        .then(amazon => {})
        .catch(error => {
          console.error(error)
        })
    })
    .catch(error => {
      console.error(error)
    })

  try {
    const google = await fetch("https://google.com")
    try {
      const amazon = await fetch("https://amazon.com")
    } catch (error2) {
      console.error(error2)
    }
  } catch (error) {
    console.error(error)
  }

  const weather = weathers[Math.floor(Math.random() * weathers.length)]

  const result = {
    weather,
  }

  res.json(result)
}
