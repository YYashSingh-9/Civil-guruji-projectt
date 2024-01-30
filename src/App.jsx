import { useEffect } from "react";
import HomePage from "./Components/HomePage";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastifyFn = () => {
  return toast("You have not purchased you course.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

function App() {
  const loaderData = useLoaderData();

  useEffect(() => {
    console.log(loaderData);
    // toastifyFn();
    if (loaderData.data.length) {
      toastifyFn();
    }
  }, [loaderData]);

  return (
    <>
      <HomePage />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
