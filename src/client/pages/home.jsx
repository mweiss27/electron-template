import { Button, Stack, Typography, styled } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { PageLayout } from "../layouts/page-layout"
import { getRoute } from "../api/api"

const FitButton = styled(Button)`
  width: fit-content;
`

export const HomePage = () => {
  const [counter, setCounter] = useState(0)
  const [weather, setWeather] = useState(null)

  const updateWeather = useCallback(async () => {
    const result = await fetch(getRoute("/weather")).then(res => res.json())
    setWeather(result.weather)
  }, [])

  return (
    <PageLayout>
      <Stack direction="column" gap={2}>
        <Typography variant="Headline6">Current Count: {counter}</Typography>
        <Stack direction="row">
          <FitButton onClick={() => setCounter(counter + 1)}>Increment</FitButton>
          <FitButton onClick={() => setCounter(counter - 1)}>Decrement</FitButton>
        </Stack>

        <Typography variant="Headline6">Current Weather: {weather ?? "N/A"}</Typography>
        <Stack direction="row">
          <FitButton onClick={updateWeather}>Update Weather</FitButton>
        </Stack>
      </Stack>
    </PageLayout>
  )
}
