import "./App.css";
import LandingPage from "./pages/LandingPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewPage from "./pages/ViewPage";
import Favicon from "react-favicon";
import icon from "../src/assets/icons.png";

function App() {
  return (
    <div>
      <Favicon url={icon} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/blogs" element={<AllBlogsPage />} />
          <Route path="/blogs/:blogId" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
