import "./App.css";
import LandingPage from "./pages/LandingPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<LandingPage />} />
          </Route>
          <Route path="/blog" element={<AllBlogsPage />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
