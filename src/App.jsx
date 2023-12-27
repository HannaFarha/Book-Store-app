import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import "./App.css";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      
       <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
