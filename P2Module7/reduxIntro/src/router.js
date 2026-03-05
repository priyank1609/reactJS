import { createBrowserRouter } from "react-router";
import Dashboard from "./Dashboard";
import Counter from "./counter/Counter";

const router = createBrowserRouter([
  {index: true, Component: Dashboard},
  {path: '/counter', Component: Counter}
])

export default router;