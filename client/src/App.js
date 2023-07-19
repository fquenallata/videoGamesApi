//views
import Home from "./views/home/home.component.jsx";
import Detail from "./views/detail/detail.component.jsx";
import Landing from "./views/landing/landing.component.jsx";
import Form from "./views/form/form.component.jsx";
//routes
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/post" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
