import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../pages/home/Home';
import AboutUs from '../../pages/about-us/AboutUs';
import Events from '../../pages/events/Events';
import ContactUs from '../../pages/contact-us/ContactUs';
import Donation from '../../pages/donation/Donation';
import Registration from '../../pages/badminton/registration/Registration';
import Bylaws from '../../pages/badminton/bylaws/Bylaws';
import WaiverForm from '../../pages/badminton/waiver-form/WaiverForm';
import Gallery from '../../pages/badminton/gallery/Gallery';
import PaymentMethod from '../../pages/badminton/registration/PaymentMethod';
import PaymentForm from '../../components/payment-method/CardPaymentForm';
import Zelle from '../../components/payment-method/ZellePayment';
import PaymentReceipt from '../../components/payment-method/PaymentReceipt';
import PaymentSuccess from '../../components/payment-method/PaymentSuccess';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [

            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
            {
                path: '/events',
                element: <Events />,
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },
            {
                path: '/donation',
                element: <Donation />,
            },
            {
                path: '/badminton/registration',
                element: <Registration />
            },
            {
                path: '/badminton/registration/payment-method',
                element: <PaymentMethod />,
            },
            {
                path: '/badminton/registration/payment-method/payment-success',
                element: <PaymentSuccess />,
            },
            {
                path: '/badminton/registration/payment-method/payment-receipt',
                element: <PaymentReceipt />,
            },
            {
                path: '/badminton/bylaws',
                element: <Bylaws />,
            },
            {
                path: '/badminton/waiver-form',
                element: <WaiverForm />,
            },
            {
                path: '/badminton/gallery',
                element: <Gallery />,
            },
            {
                path: '/soccer/registration',
                element: <Registration />,
            },
            {
                path: '/soccer/bylaws',
                element: <Bylaws />,
            },
            {
                path: '/soccer/waiver-form',
                element: <WaiverForm />,
            },
            {
                path: '/soccer/gallery',
                element: <Gallery />,
            },

        ],
    },
    // {
    //     path: '/login',
    //     element: <Login />,
    // },
    // {
    //     path: '/register',
    //     element: <Register />,
    // },

]);

export default routes;