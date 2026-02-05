import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

import Authors from "./pages/authors/Authors";
import Card from "./pages/cart/Cart";
import Book from "./pages/book/Book";
import Contact from  "./pages/contact/Contact";
import Login from  "./pages/forms/Login";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/book/:id" element={<Book />} />
       
      </Routes>
       <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
