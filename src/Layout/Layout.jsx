import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className="container mx-auto mt-10 mb-14">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;