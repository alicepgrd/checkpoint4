import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "../src/style/globals.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
