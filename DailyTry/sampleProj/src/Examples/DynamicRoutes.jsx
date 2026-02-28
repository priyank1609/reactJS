import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

/* ---------------- Pages ---------------- */

function Team() {
  const { teamId } = useParams();
  return <h3>Team ID: {teamId}</h3>;
}

function Product() {
  const { categoryId, productId } = useParams();
  return (
    <h3>
      Category: {categoryId} , Product: {productId}
    </h3>
  );
}

function Categories() {
  const { lang } = useParams();
  return <h3>Language: {lang}</h3>;
}

function SearchResults() {
  const [searchParams] = useSearchParams();
  return (
    <h3>
      Search query: {searchParams.get("q")}
    </h3>
  );
}

/* -------- Using location object -------- */

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    console.log("Visited page:", location.pathname);
  }, [location]);
  return null;
}

/* ---------------- App ---------------- */

export default function DynamicRoutes() {
  return (
    <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="teams/:teamId" element={<Team />} />
            <Route path="c/:categoryId/p/:productId" element={<Product />} />
            <Route path=":lang?/categories" element={<Categories />} />
            <Route path="search" element={<SearchResults />} />
        </Routes>
    </BrowserRouter>
  );
}