import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h1 className="text-xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you requested doesn’t exist.</p>
        <a className="mt-4 inline-block font-semibold text-slate-900 hover:underline" href="/">
          Go home →
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
