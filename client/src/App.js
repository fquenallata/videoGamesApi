//views
import Home from "./views/Home/Home.component.jsx";
import Detail from "./views/Detail/Detail.component.jsx";
import Landing from "./views/Landing/Landing.component.jsx";
import Create from "./views/Create/Create.component.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/post" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
