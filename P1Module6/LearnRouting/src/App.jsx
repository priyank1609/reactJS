import { BrowserRouter, Route, Routes } from "react-router";
import Users from "./dashboard/Users";
import DashboardHome from "./dashboard/dashboard-home";
import Home from "./home";
import About from "./about";
import ProtectedRoutes from "./components/protected-routes";
import { lazy, Suspense } from "react";
import Loader from "./loader";
const Login = lazy(() => import("./login"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Products = lazy(() => import("./dashboard/Products"));
const ProductDetail = lazy(() => import("./dashboard/product-detail"));

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
