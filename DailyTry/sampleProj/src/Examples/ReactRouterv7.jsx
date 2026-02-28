import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  useLoaderData
} from "react-router";

/* ---------- Pages ---------- */

function Home() {
  return <h2>Home Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

function ProductDetail() {
  const product = useLoaderData();
  return <h3>Product: {product.name}</h3>;
}

function ErrorPage() {
  const error = useRouteError();
  return <p>Error: {error.message}</p>;
}

/* ---------- Router ---------- */

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    },

    {
      path: "/products/:id",
      element: <ProductDetail />,
      loader: async ({ params }) => {
        const res = await fetch(
          `https://api.example.com/${params.id}`
        );
        return res.json();
      },
      errorElement: <ErrorPage />
    }
  ],
  {
    hydrateFallbackElement: <div>Loading application…</div>
  }
);

/* ---------- App ---------- */

export default function ReactRouterv7() {
  return <RouterProvider router={router} />;
}