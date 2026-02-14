import { BrowserRouter, Route, Routes } from "react-router";
import Users from "./dashboard/Users";
import Products from "./dashboard/Products";
import Dashboard from "./dashboard/Dashboard";
import DashboardHome from "./dashboard/dashboard-home";
import Login from "./login";
import Home from "./home";
import About from "./about";
import ProductDetail from "./dashboard/product-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<DashboardHome />}/>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id/:title?" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<p>Not Found 404</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
