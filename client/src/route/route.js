

import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./privateRoute";
import { privateRoute } from "./publicRoute";

// create router
const router = createBrowserRouter([...publicRoute,...privateRoute])

export default router;