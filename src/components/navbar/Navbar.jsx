import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Calendar,
  Mail,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Volleyball,
} from "lucide-react";

const menuItems = [
  { to: "/", icon: <Home className="h-4 w-4 md:h-6 md:w-6" />, label: "Home" },
  {
    to: "/about-us",
    icon: <Info className="h-4 w-4 md:h-6 md:w-6" />,
    label: "About Us",
  },
  {
    to: "/events",
    icon: <Calendar className="h-4 w-4 md:h-6 md:w-6" />,
    label: "Events",
  },
  {
    icon: <Volleyball className="h-4 w-4 md:h-6 md:w-6" />,
    label: "Soccer",
  },
  {
    icon: <img src="/images/badIcon.png" className="h-4 w-4 md:h-6 md:w-6" />,
    label: "Badminton",
    subLinks: [
      { to: "/badminton/registration", label: "Registration" },
      { to: "/badminton/bylaws", label: "Bylaws" },
      { to: "/badminton/gallery", label: "Gallery" },
      { to: "/badminton/waiver-form", label: "Waiver Form" },
      { to: "/badminton/score", label: "Score" },
    ],
  },
  {
    to: "/contact-us",
    icon: <Mail className="h-4 w-4 md:h-6 md:w-6" />,
    label: "Contact Us",
  },
  {
    to: "/donation",
    icon: <DollarSign className="h-4 w-4 md:h-6 md:w-6" />,
    label: "Donation",
  },
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

  const handleMenuClick = (link) => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#14649b] w-full border-b-[1px] border-b-gray-400 sticky top-0 z-40">
      {/* Desktop Navigation */}
      <div className="w-full md:w-[80%] md:mx-auto">
        <div className="flex items-center justify-between mr-3 md:mx-0">
          {/* Logo */}
          <Link to="/" className="w-[135px] md:h-[66px]">
            <img
              src="/images/logo2.png"
              alt="logo"
              className="w-[135px] md:h-[66px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center">
              {menuItems.map((item, i) => (
                <div key={i} className="relative group">
                  {item.subLinks ? (
                    <div
                      className={`flex flex-col items-center md:px-4 lg:px-6 py-2 hover:text-[#a1c3da] hover:bg-[#092f48] transition-colors cursor-pointer ${
                        pathname === item?.to &&
                        "text-[#a1c3da] font-bold bg-[#092f48]"
                      }`}
                      onClick={() => toggleSubMenu(item.label)}
                    >
                      {item.icon}
                      {item?.label}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className={`flex flex-col items-center md:px-4 lg:px-6 py-2 hover:text-[#a1c3da] hover:bg-[#092f48] transition-colors ${
                        pathname === item?.to &&
                        "text-[#a1c3da] font-bold bg-[#092f48]"
                      }`}
                      onClick={handleMenuClick}
                    >
                      {item.icon}
                      {item?.label}
                    </Link>
                  )}
                  {item.subLinks && (
                    <div className="absolute left-0 w-48 bg-[#14649b] shadow-lg hidden group-hover:block z-50">
                      <div className="py-2">
                        {item.subLinks.map((subLink, i) => (
                          <Link
                            key={i}
                            to={subLink.to}
                            className={`block px-4 py-2 text-gray-100 hover:bg-[#092f48] transition-colors ${
                              pathname === subLink?.to &&
                              "text-[#a1c3da] font-bold bg-[#092f48]"
                            }`}
                            onClick={handleMenuClick}
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 border border-gray-100 hover:bg-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div
          className={`w-64 h-screen border-primary md:rounded-xl bg-[#212121] flex flex-col justify-between fixed md:static inset-y-0 right-0 md:left-0 mt-0 md:mt-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}
        >
          <div className="overflow-y-auto h-full max-h-screen pt-2 pb-3 space-y-1 sm:px-3 bg-[#14649b]">
            {menuItems.map((item, i) => (
              <div key={i}>
                <div
                  className={`flex items-center justify-between text-gray-100 hover:bg-blue-600 transition-colors cursor-pointer ${
                    pathname === item?.to &&
                    "text-[#a1c3da] font-bold bg-[#092f48]"
                  }`}
                  onClick={() => {
                    if (item.subLinks) {
                      toggleSubMenu(item.label);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.subLinks ? (
                    <div className="flex items-center cursor-pointer gap-2 w-full h-full px-3 py-2">
                      {item.icon}
                      {item?.label}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className="flex items-center gap-2 w-full h-full px-3 py-2"
                      onClick={handleMenuClick}
                    >
                      {item.icon}
                      {item?.label}
                    </Link>
                  )}
                  {item.subLinks && (
                    <button className="ml-4 focus:outline-none">
                      {activeMenu === item.label ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
                {item.subLinks && activeMenu === item.label && (
                  <div className="ml-4">
                    {item.subLinks.map((subLink, i) => (
                      <Link
                        key={i}
                        to={subLink.to}
                        className={`block px-4 py-2 text-gray-100 hover:bg-blue-600 rounded-md transition-colors ${
                          pathname === subLink?.to &&
                          "text-[#a1c3da] font-bold bg-[#092f48]"
                        }`}
                        onClick={handleMenuClick}
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
