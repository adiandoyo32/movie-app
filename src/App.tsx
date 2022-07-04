import { BrowserRouter } from "react-router-dom";
import "swiper/swiper.min.css";
import "./App.scss";
import AppRoutes from "./config/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
