import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Menu, X, Home, Info, Calendar, Mail, DollarSign, ChevronDown, ChevronUp, Volleyball } from 'lucide-react';
import { GiShuttlecock } from "react-icons/gi";

const menuItems = [
    { to: "/", icon: <Home />, label: "Home" },
    { to: "/about-us", icon: <Info />, label: "About Us" },
    { to: "/events", icon: <Calendar />, label: "Events" },
    {
        icon: <Volleyball />,
        label: "Soccer",
        subLinks: [
            { to: "/soccer/registration", label: "Registration" },
            { to: "/soccer/bylaws", label: "Bylaws" },
            { to: "/soccer/gallery", label: "Gallery" },
            { to: "/soccer/waiver-form", label: "Waiver Form" },
            { to: "/soccer/score", label: "Score" }
        ]
    },
    {
        icon: <GiShuttlecock className="rotate" />,
        label: "Badminton",
        subLinks: [
            { to: "/badminton/registration", label: "Registration" },
            { to: "/badminton/bylaws", label: "Bylaws" },
            { to: "/badminton/waiver-form", label: "Waiver Form" },
            { to: "/badminton/gallery", label: "Gallery" },
            { to: "/badminton/score", label: "Score" }
        ]
    },
    { to: "/contact-us", icon: <Mail />, label: "Contact Us" },
    { to: "/donation", icon: <DollarSign />, label: "Donation" }
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu);
        }
    };

    return (
        <nav className="bg-[#14649b] w-full border-b-[1px] border-b-gray-400 sticky top-0 z-40">
            {/* Desktop Navigation */}
            <div className="w-full md:w-[80%] md:mx-auto">
                <div className="flex items-center justify-between mr-3 md:mx-0">
                    {/* Logo */}
                    <div className="w-[135px]">
                        <Link to="/" className="">
                            <img src="/logo2.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center">
                            {menuItems.map(item => (
                                <div key={item.to} className="relative group">
                                    {item.subLinks ? (
                                        <div
                                            className={`flex flex-col items-center px-6 py-2 hover:text-[#a1c3da] hover:bg-[#092f48] transition-colors cursor-pointer ${pathname === item?.to && "text-[#a1c3da] font-bold bg-[#092f48]"
                                                }`}
                                            onClick={() => toggleSubMenu(item.label)}
                                        >
                                            {item.icon}
                                            {item?.label}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.to}
                                            className={`flex flex-col items-center px-6 py-2 hover:text-[#a1c3da] hover:bg-[#092f48] transition-colors ${pathname === item?.to && "text-[#a1c3da] font-bold bg-[#092f48]"
                                                }`}
                                        >
                                            {item.icon}
                                            {item?.label}
                                        </Link>
                                    )}
                                    {item.subLinks && (
                                        <div className="absolute left-0 w-48 bg-[#14649b] shadow-lg hidden group-hover:block z-50">
                                            <div className="py-2">
                                                {item.subLinks.map(subLink => (
                                                    <Link
                                                        key={subLink.to}
                                                        to={subLink.to}
                                                        className={`block px-4 py-2 text-gray-100 hover:bg-[#092f48] transition-colors ${pathname === subLink?.to && "text-[#a1c3da] font-bold bg-[#092f48]"
                                                            }`}
                                                    >
                                                        {subLink?.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 border border-white hover:bg-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">

                <div className={`w-64 h-screen border-primary md:rounded-xl bg-[#212121] flex flex-col justify-between fixed md:static inset-y-0 right-0 md:left-0 mt-0 md:mt-0 transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}>
                    <div className="overflow-y-auto h-full max-h-screen pt-2 pb-3 space-y-1 sm:px-3 bg-[#14649b]">
                        {menuItems.map(item => (
                            <div key={item.to}>
                                <div className={`flex items-center justify-between px-3 py-2 text-gray-100 hover:bg-blue-600 transition-colors ${pathname === item?.to && "text-[#a1c3da] font-bold bg-[#092f48]"
                                    }`}
                                    onClick={() => item.subLinks ? toggleSubMenu(item.label) : null}
                                >
                                    {item.subLinks ? (
                                        <div className="flex items-center cursor-pointer">
                                            {item.icon}
                                            {item?.label}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.to}
                                            className="flex items-center"
                                        >
                                            {item.icon}
                                            {item?.label}
                                        </Link>
                                    )}
                                    {item.subLinks && (
                                        <button className="ml-4 focus:outline-none">
                                            {activeMenu === item.label ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                        </button>
                                    )}
                                </div>
                                {item.subLinks && activeMenu === item.label && (
                                    <div className="ml-4">
                                        {item.subLinks.map(subLink => (
                                            <Link
                                                key={subLink.to}
                                                to={subLink.to}
                                                className={`block px-4 py-2 text-gray-100 hover:bg-blue-600 rounded-md transition-colors ${pathname === subLink?.to && "text-[#a1c3da] font-bold bg-[#092f48]"
                                                    }`}
                                            >
                                                {subLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Overlay for mobile */}
                {isOpen && (
                    <div
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-black opacity-70 md:hidden z-40"
                    ></div>
                )}
            </div>
        </nav>
    );
}
