import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../hooks/ScrollToTop';
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer';


const MainLayout = () => {
    return (
        <div className="font-display">
            <Navbar />
            <div className="w-full md:w-[80%] md:mx-auto px-2">
                <ScrollToTop />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;