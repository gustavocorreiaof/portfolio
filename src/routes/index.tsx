import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Books from "../pages/books";
import Stacks from "../pages/stacks";
import AppLayout from "../components/layout/AppLayout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Career" element={<About />} />
          <Route path="/Stacks" element={<Stacks />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
