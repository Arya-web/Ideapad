import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarElem from "./components/Navbar/NavbarElem";
import { Home, Ideas, CreateIdea } from "./views";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarElem />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/ideas"
            element={
              <>
                <Ideas />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <CreateIdea />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
