import HomePage from "./Components/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}

export default App;
