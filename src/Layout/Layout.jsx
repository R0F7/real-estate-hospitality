import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className="container mx-auto mb-8 md:mb-10 lg:mt-10 lg:mb-14">
                <Navbar></Navbar>
            </div>
            <div className="container md:mx-auto lg:mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;