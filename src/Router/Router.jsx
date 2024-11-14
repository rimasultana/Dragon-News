import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayOut/>,
        errorElement:<NotFound/>,
    }
])
export default router;