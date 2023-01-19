import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

const RootLayout = () => {
  return (
    <div className="font-satoshi bg-borderGray/[0.7]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
