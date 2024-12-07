import { Facebook, Twitter, Globe, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#14649b] pt-8 md:pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold">DULLES UNITED</span>
                        </Link>
                        <p className="text-gray-100 mb-6">
                            Dulles United Association is a 501(c3) non-profit organization serving in Northern Virginia to promote and provide social & sports opportunities to individuals. Our vision is to support our community by organizing various sports and social events.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/dullesunited/" className="text-gray-100 hover:text-gray-900">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-100 hover:text-gray-900">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-100 hover:text-gray-900">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-100 hover:text-gray-900">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', url: '/about-us' },
                                { name: 'Events', url: '/events' },
                                { name: 'Soccer', url: '/soccer/registration' },
                                { name: 'Badminton', url: '/badminton/registration' },
                                { name: 'Contact Us', url: '/contact-us' },
                                { name: 'Donation', url: '/donation' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.url} className="text-gray-100 hover:text-gray-900">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacts</h3>
                        <div className="space-y-3 text-gray-100">
                            <p>+1 (305) 587-3407</p>
                            <p>info@dullesunited.com</p>
                            <p>Northern Virginia, USA</p>
                        </div>
                    </div>

                    {/* Media Partner */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Media Partner:</h3>
                        <div className="space-y-4">
                            {/* <p>নিউজবিডিইউএস ওয়াশিংটনডিসি</p> */}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-100 text-sm">
                    <p>
                        Copyright ©2024 All rights reserved DULLES UNITED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
