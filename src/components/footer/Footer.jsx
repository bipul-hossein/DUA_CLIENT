import { Facebook, Twitter, Globe, Instagram } from 'lucide-react'
import { Link } from "react-router-dom";

export default function Footer() {
    const newsItems = [
        {
            image: "/placeholder.svg?height=60&width=80",
            title: "School for African Childrens",
            date: "Jun 12, 2019"
        },
        {
            image: "/placeholder.svg?height=60&width=80",
            title: "School for African Childrens",
            date: "Jun 12, 2019"
        }
    ]

    return (
        <footer className="bg-gray-50 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold">🦅 Charifit</span>
                        </Link>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore.
                        </p>
                        <div className="flex gap-4">
                            <Link to="#" className="text-gray-600 hover:text-gray-900">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-gray-900">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-gray-900">
                                <Globe className="w-5 h-5" />
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-gray-900">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {['Donate', 'Sponsor', 'Fundraise', 'Volunteer', 'Partner', 'Jobs'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-600 hover:text-gray-900">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacts</h3>
                        <div className="space-y-3 text-gray-600">
                            <p>+2(305) 587-3407</p>
                            <p>info@loveuscharity.com</p>
                            <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                        </div>
                    </div>

                    {/* Top News */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Top News</h3>
                        <div className="space-y-4">
                            {newsItems.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={60}
                                        className="rounded object-cover"
                                    />
                                    <div>
                                        <h4 className="font-medium text-sm hover:text-blue-600">
                                            <Link to="#">{item.title}</Link>
                                        </h4>
                                        <p className="text-sm text-gray-600">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
                    <p>
                        Copyright ©2024 All rights reserved | This template is made with ❤️ by{' '}
                        <Link to="https://colorlib.com" className="text-blue-600 hover:text-blue-700">
                            Colorlib
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

