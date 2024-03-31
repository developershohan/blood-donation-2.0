import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <div className="main-wrapper">
        <Header />
        <Breadcrumb/>
        <Outlet/>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
