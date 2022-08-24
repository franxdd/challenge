// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Nav/navbar";
import Screen1 from "./Components/Screen1/screen1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Navbar />}>
        <Route path={"tabla"} element={<Screen1 />} />
        <Route path={"formulario"} element={<Form />} />
     </Route> </Routes>
    </div>
  );
}

export default App;
