import "./App.css";
import image1 from "./assets/phone1.png";
import image2 from "./assets/phone2.png";
import LandingPage from "./pages/LandingPage";

import { UpDownAnimation } from "./style/ComponentStyles";

function App() {
  return (
    <div /* className="App" */>
      <LandingPage />
      {/* //{" "}
      <div style={{ display: "flex" }}>
        // <UpDownAnimation src={image1} Mover="mover1" />
        // <UpDownAnimation src={image2} Index="-1" MarginLeft="-80px" />
        //{" "}
      </div>
      // <div className="border">Hello</div> */}
    </div>
  );
}

export default App;
