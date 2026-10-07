import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import NewsDetails from "./pages/NewsDetails";
import EditNews from "./pages/EditNews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/login" element={<Login />} />

<Route
  path="/"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

<Route
  path="/add"
  element={
    <ProtectedRoute>
      <AddNews />
    </ProtectedRoute>
  }
/>

<Route
  path="/news/:id"
  element={
    <ProtectedRoute>
      <NewsDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit/:id"
  element={
    <ProtectedRoute>
      <EditNews />
    </ProtectedRoute>
  }
/>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/edit/:id" element={<EditNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;