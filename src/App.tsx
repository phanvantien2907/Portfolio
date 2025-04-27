import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/Projects";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import BlogPage from "./pages/Blog/Blog";
import ErrorPage from "./pages/404/404";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/404notfound" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
