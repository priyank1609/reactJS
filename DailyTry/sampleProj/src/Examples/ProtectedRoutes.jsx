import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate
} from "react-router-dom";
import { createContext, useContext, useState } from "react";

/* ---------------- Auth Context ---------------- */

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

/* ---------------- Protected Route ---------------- */

function ProtectedRoute({ redirectPath = "/login", children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}

/* ---------------- Pages ---------------- */

function Home() {
  return <h2>Home (Public)</h2>;
}

function Dashboard() {
  return <h2>Dashboard (Protected)</h2>;
}

function Login() {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  const handleLogin = () => {
    // fake login
    setIsAuthenticated(true);

    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

/* ---------------- App ---------------- */

export default function ProtectedRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}