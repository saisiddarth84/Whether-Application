import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-2/3 text-center mx-auto">
        <Outlet />
    </div>
  );
}

export default App;
