import Login from "./login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { Provider } from "react-redux"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "browse",
            element: <Browse />
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body