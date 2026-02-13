import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg z-50">

            <div className="max-w-7xl mx-auto px-5">

                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-white font-bold text-xl tracking-wide"
                    >
                        Dr. S. Vairachilai
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">

                        {pages.map((page) => (
                            <Link
                                key={page.name}
                                to={page.path}
                                className="text-white font-medium px-4 py-2 rounded-lg
                           hover:text-yellow-300 hover:bg-white/10
                           transition-all duration-300"
                            >
                                {page.name}
                            </Link>
                        ))}

                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">

                        <button
                            onClick={toggleMenu}
                            className="text-white p-1 rounded-md
                         hover:text-yellow-300
                         focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>

                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md">

                    <div className="px-4 py-3 space-y-2">

                        {pages.map((page) => (
                            <Link
                                key={page.name}
                                to={page.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-white font-medium px-4 py-2 rounded-lg
                           hover:text-yellow-300 hover:bg-white/10
                           transition-all duration-300"
                            >
                                {page.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}

        </nav>
    );
}
