import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ---- lazy loaded pages ---- */

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

/* ---- App ---- */

function LazyLoadingApp() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>{" "}
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default LazyLoadingApp;