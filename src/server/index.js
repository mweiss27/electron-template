import express from "express"
import cors from "cors"
import { weatherHandler, weatherRoute } from "./handlers/weather-handler"

const port = 3000
const app = express()

app.use(cors())
app.get(weatherRoute, weatherHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
