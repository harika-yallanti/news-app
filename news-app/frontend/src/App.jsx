import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import NewsDetails from "./pages/NewsDetails";
import EditNews from "./pages/EditNews";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/edit/:id" element={<EditNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;