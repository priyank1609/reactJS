import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Navigate
} from "react-router-dom";
import { useState } from "react";

/* ---------------- Pages ---------------- */

function Home() {
  return (
    <div>
      <h2>Home</h2>

      {/* Link with state and replace */}
      <Link
        to="/login"
        replace
        state={{ from: "home" }}
      >
        Go to Login
      </Link>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // pretend login success
    navigate("/dashboard");
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

/* ---------- Protected Route using Navigate ---------- */

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

/* ---------------- Dashboard ---------------- */

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {/* NavLink with custom active styling */}
      <nav>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard Home
        </NavLink>
        {" | "}
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Settings
        </NavLink>
      </nav>
      <p>Welcome to dashboard</p>
    </div>
  );
}

function DashboardSettings() {
  return <h3>Settings Page</h3>;
}

/* ---------------- App ---------------- */

export default function ReactRouterNavigation() {
  const [isAuthenticated] = useState(true);
  return (
    <BrowserRouter>
      {/* Top menu using NavLink */}
      <nav>
        <NavLink to="/" end>Home</NavLink> |{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protected route using Navigate */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardSettings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}