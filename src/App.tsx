import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Response from "./pages/Response";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/response" element={<Response />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
