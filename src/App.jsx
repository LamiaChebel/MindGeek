import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Header/Header";
import Home from "./Pages/Home";
import ServerCloud from "./Pages/ServeurCloud";
import Contact from "./Pages/Contact";

function App() {
  
    return (
      <>
          <Header />

          <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"Serveur Cloud"} element={<ServeurCloud />} />
              <Route path={"Contact"} element={<Contact />} />
          </Routes>

          <Footer/>
      </>
  );
  
}

export default App;
