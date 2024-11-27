import { Link } from "react-router-dom";
import { useState } from 'react';
import { Menu, X, Home, Info, Calendar, Star, Feather, Mail, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

const menuItems = [
    { to: "/", icon: Home, label: "HOME" },
    { to: "/about", icon: Info, label: "About Us" },
    { to: "/events", icon: Calendar, label: "Events" },
    {
        to: "/soccer",
        icon: Star,
        label: "Soccer",
        subLinks: [
            { to: "/soccer/registration", label: "Registration" },
            { to: "/soccer/bylaws", label: "Bylaws" },
            { to: "/soccer/gallery", label: "Gallery" },
            { to: "/soccer/waiver-form", label: "Waiver Form" }
        ]
    },
    {
        to: "/badminton",
        icon: Feather,
        label: "Badminton",
        subLinks: [
            { to: "/badminton/registration", label: "Registration" },
            { to: "/badminton/bylaws", label: "Bylaws" },
            { to: "/badminton/waiver-form", label: "Waiver Form" },
            { to: "/badminton/gallery", label: "Gallery" }
        ]
    },
    { to: "/contact", icon: Mail, label: "Contact Us" },
    { to: "/donation", icon: DollarSign, label: "Donation" }
];

export default function Navbar() {
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
        <nav className="bg-[#14649b]">
            {/* Desktop Navigation */}
            <div className="w-full md:w-[80%] md:mx-auto">
                <div className="flex items-center justify-between h-16 mx-3 md:mx-0">
                    {/* Logo */}
                    <div className="w-32">
                        <Link to="/" className="">
                            <img src="/public/logo.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {menuItems.map(item => (
                                <div key={item.to} className="relative group">
                                    <Link
                                        to={item.to}
                                        className="flex flex-col items-center px-6 py-2 hover:text-[#a1c3da] hover:bg-[#092f48] transition-colors"
                                    >
                                        <item.icon className="w-5 h-5" />
                                        {item.label}
                                    </Link>
                                    {item.subLinks && (
                                        <div className="absolute left-0 w-48 bg-blue-700 rounded-md shadow-lg hidden group-hover:block">
                                            <div className="py-2">
                                                {item.subLinks.map(subLink => (
                                                    <Link
                                                        key={subLink.to}
                                                        to={subLink.to}
                                                        className="block px-4 py-2 text-white hover:bg-blue-600 rounded-md transition-colors"
                                                    >
                                                        {subLink.label}
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-white border border-white hover:bg-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#14649b]">
                        {menuItems.map(item => (
                            <div key={item.to}>
                                <div className="flex items-center justify-between px-3 py-2 text-white hover:bg-blue-600 transition-colors"
                                    onClick={() => item.subLinks ? toggleSubMenu(item.label) : null}
                                >
                                    <Link
                                        to={item.to}
                                        className="flex items-center"
                                    >
                                        <item.icon className="w-5 h-5 mr-2" />
                                        {item.label}
                                    </Link>
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
                                                className="block px-4 py-2 text-white hover:bg-blue-600 rounded-md transition-colors"
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
            )}
        </nav>
    );
}
