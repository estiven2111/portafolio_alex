import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./context/themeContext";
import "./App.css";

//--------COMPONENTS
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import ModeToggle from "./components/navigation/ModeToggle";
import Bio from "./pages/bio/Bio";
import Portfolio from "./pages/portfolio/Portfolio";
import Games from "./pages/games/Games";
import Contact from "./pages/contact/Contact";
import CalltoAction from "./components/CalltoAction";
import ScrollToTop from "./components/ScrollToTop";
import VoteMe from "./components/modals/voteMe";
import { useState, useEffect } from "react";


function App() {
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false);
  const timeOpenModal = Math.floor(Math.random() * (50000-10000+1000) + 10000)
  
  useEffect(() => {
    const Timer = setTimeout(() => {
      setmodalIsOpen(true);
    }, timeOpenModal);
    console.log(timeOpenModal)
  
    return () => {
      clearTimeout(Timer)
    }
  }, [])
  

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-zinc-900 dark:text-neutral-50 bg-slate-w400 bg-neutral-200 transition-colors duration-500">
        <Router>
          <ScrollToTop />
          <Navigation />
          <ModeToggle />
          {/* <VoteMe modalIsOpen={modalIsOpen}/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <CalltoAction />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
