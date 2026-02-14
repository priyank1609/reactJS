import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
import ProtectedRoutes from "./components/protected-routes";
import About from "./layouts/about/about";
import Home from "./layouts/home";
import DashboardHome from "./layouts/dashboard/dashboard-home";
import Users from "./layouts/dashboard/Users";
const Login = lazy(() => import("./layouts/login"));
const Dashboard = lazy(() => import("./layouts/dashboard/Dashboard"));
const Products = lazy(() => import("./layouts/dashboard/Products"));
const ProductDetail = lazy(() => import("./layouts/dashboard/product-detail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader message="Global Loading...." />}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} >
              <Route index element={<DashboardHome />}/>
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id/:title?" element={<ProductDetail />} />
            </Route>
          </Route>

          <Route path="*" element={<p>Not Found 404</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
