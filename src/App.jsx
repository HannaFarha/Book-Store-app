import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Card from "./pages/cart/Cart";
import Book from "./pages/book/Book";

import HomePage from "./pages/home/HomePage";
import "./App.css";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/book/:id" element={<Book />} />
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
