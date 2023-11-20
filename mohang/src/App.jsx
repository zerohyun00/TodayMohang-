import "./App.css";
import { Outlet } from "react-router-dom";
import BtnNav from "./components/BtnNav";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
