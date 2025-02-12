import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "../src/style/globals.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
