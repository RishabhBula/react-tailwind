import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Service from "../src/Pages/Service";
import Contact from "../src/Pages/Contact";
import Update from "./Components/Crud/Update";
import Read from "./Components/Crud/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/service" element={<Service />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
            <Route exact path="/read" element={<Read />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
