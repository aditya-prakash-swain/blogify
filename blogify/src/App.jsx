import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios"

function App() {

  axios.defaults.withCredentials= true;
  axios.post('https://blogify-mu-livid.vercel.app/').catch(err => console.log(err))

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
