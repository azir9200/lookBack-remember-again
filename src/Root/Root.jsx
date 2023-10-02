import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";


const Root = () => {
  return (
    <div className="max-w-[1300px] mx-auto" >
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;