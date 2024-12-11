import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../pages/home/Home';
import AboutUs from '../../pages/about-us/AboutUs';
import Events from '../../pages/events/Events';
import ContactUs from '../../pages/contact-us/ContactUs';
import Donation from '../../pages/donation/Donation';
import PaymentMethod from '../../pages/badminton/registration/PaymentMethod';
// import PaymentReceipt from '../../components/payment-method/PaymentReceipt';
// import PaymentSuccess from '../../components/payment-method/PaymentSuccess';
import BadmintonRegistration from '../../pages/badminton/registration/Registration';
import BadmintonBylaws from '../../pages/badminton/bylaws/Bylaws';
import BadmintonGallery from '../../pages/badminton/gallery/Gallery';
import BadmintonScore from '../../pages/badminton/score/Score';
import SoccerRegistration from '../../pages/soccer/registration/Registration';
import SoccerBylaws from '../../pages/soccer/bylaws/Bylaws';
import SoccerWaiverForm from '../../pages/soccer/waiver-form/WaiverForm';
import SoccerGallery from '../../pages/soccer/gallery/Gallery';
import SoccerScore from '../../pages/soccer/score/Score';
import BadmintonWaiverForm from '../../pages/badminton/waiver-form/WaiverForm';
import QrCodeForZelle from '../../components/payment-method/QrCodeForZelle';
import PaymentResponse from '../../components/payment-method/PaymentResponse';


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
        element: <BadmintonRegistration />
      },
      {
        path: '/badminton/registration/payment-method',
        element: <PaymentMethod />,
      },
      {
        path: '/badminton/registration/payment-method/zelle-qrcode',
        element: <QrCodeForZelle />,
      },
      {
        path: '/payment/payment-response',
        element: <PaymentResponse />,
      },
      // {
      //   path: '/badminton/registration/payment-method/payment-receipt',
      //   element: <PaymentReceipt />,
      // },
      {
        path: '/badminton/bylaws',
        element: <BadmintonBylaws />,
      },
      {
        path: '/badminton/waiver-form',
        element: <BadmintonWaiverForm />,
      },
      {
        path: '/badminton/gallery',
        element: <BadmintonGallery />,
      },
      {
        path: '/badminton/score',
        element: <BadmintonScore />,
      },
      {
        path: '/soccer/registration',
        element: <SoccerRegistration />,
      },
      {
        path: '/soccer/bylaws',
        element: <SoccerBylaws />,
      },
      {
        path: '/soccer/waiver-form',
        element: <SoccerWaiverForm />,
      },
      {
        path: '/soccer/gallery',
        element: <SoccerGallery />,
      },
      {
        path: '/soccer/score',
        element: <SoccerScore />,
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