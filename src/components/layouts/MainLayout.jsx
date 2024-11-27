import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../hooks/ScrollToTop';
import Navbar from "../navbar/Navbar"
import Footer from '../features-section/Footer';

const MainLayout = () => {
    return (
        <div className="font-display bg-red-50">
            <Navbar />
            <div className="w-full mx-3 md:mx-auto">
                <ScrollToTop />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;