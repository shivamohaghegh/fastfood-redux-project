import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainLayout;
