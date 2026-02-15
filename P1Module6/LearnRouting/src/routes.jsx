import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import ProtectedRoutes from './components/protected-routes'
import About from './layouts/about/about'
import Dashboard from './layouts/dashboard/Dashboard'
import DashboardHome from './layouts/dashboard/dashboard-home'
import Users from './layouts/dashboard/Users'
import Products from './layouts/dashboard/Products'
import ProductDetail from './layouts/dashboard/product-detail'
import Loader from './components/loader.jsx'
import ErrorPage from './components/error-page.jsx'
import MyErrorBoundary2 from './components/my-beautiful-error-boundary.jsx'

{/* <BrowserRouter>
      <Suspense fallback={<Loader message="Global Loading...." />}>
        <Routes>
          <Route index element={<Home />} />
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
    </BrowserRouter> */}

const AppRouter = () => {
    // const router = createBrowserRouter([
    //     {path: '', index: true, Component: Home},
    //     {path: 'login', Component: Login},
    //     {Component: ProtectedRoutes, children: [
    //         {path: 'about', Component: About},
    //         {path: 'dashboard', Component: Dashboard, children: [
    //             {index: true, Component: DashboardHome},
    //             {path: 'users', Component: Users},
    //             {path: 'products', Component: Products},
    //             {path: 'products/:id', Component: ProductDetail},
    //         ]},
    //     ]},
    //     {path: "*", element: <p>Not Found 404</p>}
    // ])
    const router = createBrowserRouter(createRoutesFromElements(
        <Route errorElement={<MyErrorBoundary2 />} hydrateFallbackElement = {<Loader />}>
            <Route 
                index
                lazy={() => 
                    import('./layouts/home.jsx').then((module) => ({
                        Component: module.default
                    }))
                } />
            <Route 
                path="login" 
                lazy={() => 
                    import('./layouts/login.jsx').then((module) => ({
                        Component: module.default
                    }))
                } />

            <Route element={<ProtectedRoutes />}>
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} >
                <Route index element={<DashboardHome />}/>
                <Route path="users" element={<Users />} />
                <Route path="products" errorElement={<MyErrorBoundary2 />} element={<Products />} />
                <Route path="products/:id/:title?" element={<ProductDetail />} />
              </Route>
            </Route>

            <Route path="*" element={<p>Not Found 404</p>} />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter
