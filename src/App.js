import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import View from "./View";
import About from "./About";
import Contact from "./Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import "./assets/css/style.css";
import { AuthWrapper } from "./context/auth";
import { CartWrapper } from "./context/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "./assets/images/loader.gif";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <CartWrapper>
          <div className="loader-wrapper">
            <img src={loader} alt="loader" />
          </div>
          <AppWrapper>
            <Navbar />
            <SearchBar />
            <MainNavigation />
            <ToastContainer />
            <Footer />
          </AppWrapper>
        </CartWrapper>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;