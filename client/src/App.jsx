import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./route/route";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authApiSlice";
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    if (localStorage.getItem("loginUser")) {
      dispatch(getLoggedInUser())
    }
  },[dispatch])

  return (
    <>
      <ToastContainer
        style={{ zIndex: "9999999999999999999" }}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
