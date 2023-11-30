import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/home"

const homePageRoute = {
  path: "/",
  element: <HomePage />,
}

export const router = createBrowserRouter([homePageRoute])
