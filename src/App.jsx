import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageAnnexe from "./pages/PageAnnexe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-annexe" element={<PageAnnexe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
