import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";

/* ---------- Pages ---------- */

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <button onClick={() => navigate("/dashboard")}>Home</button>
      <button onClick={() => navigate("/dashboard/settings")}>
        Settings
      </button>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

function DashboardHome() {
  return <p>Dashboard Home (Index Route)</p>;
}

function DashboardSettings() {
  return <p>Dashboard Settings Page</p>;
}

function Error404() {
  return <h2>404 – Page Not Found</h2>;
}

/* ---------- App ---------- */

export default function RoutesIntroApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* normal route */}
        <Route path="/" element={<Home />} />
        {/* nested route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* index route */}
          <Route index element={<DashboardHome />} />
          {/* child route */}
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        {/* 404 route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}