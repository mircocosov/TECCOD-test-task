import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Payment from "./pages/Payment"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/payment",
		element: <Payment />,
	},
])
