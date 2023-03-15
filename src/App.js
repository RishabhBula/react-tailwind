import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Update from "./Components/Crud/Update";
import Read from "./Components/Crud/Read";
import UpdateData from "./Components/Crud3/UpdateData";

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
            <Route exact path="/updatedata" element={<UpdateData />}></Route>
            <Route exact path="/read" element={<Read />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
