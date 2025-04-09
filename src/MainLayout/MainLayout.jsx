
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavbarComponent from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
     <NavbarComponent></NavbarComponent>
      <div className="min-h-[calc(100vh-420px)] dark:bg-metal-800">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
