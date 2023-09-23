import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NewChocolate from "../pages/NewChocolate/NewChocolate";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:  <Home></Home>
            },
            {
                path: 'new-chocolate',
                element: <NewChocolate></NewChocolate>
            }
        ]
    }
])

export default router;