import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Dr. S. Vairachilai | Academic & Research Profile</title>
                <meta
                    name="description"
                    content="Official website of Dr. S. Vairachilai. Academic profile, research publications, and contact information."
                />
                <meta
                    name="keywords"
                    content="Dr S Vairachilai, Professor, Researcher, Publications, Academic, University"
                />
                <meta name="author" content="Dr. S. Vairachilai" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <nav
                className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg z-50"
                role="navigation"
                aria-label="Main Navigation"
            >
                <div className="max-w-7xl mx-auto px-5">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <NavLink
                            to="/"
                            tabIndex={0}
                            aria-label="Homepage Logo"
                            className="text-white font-bold text-xl tracking-wide hover:text-yellow-300 transition"
                        >
                            Dr. S. Vairachilai
                        </NavLink>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">
                            {pages.map((page, index) => (
                                <NavLink
                                    key={page.name}
                                    to={page.path}
                                    tabIndex={index + 1}
                                    aria-label={`Go to ${page.name} page`}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${isActive
                                            ? "bg-white/20 text-yellow-300"
                                            : "text-white hover:text-yellow-300 hover:bg-white/10"
                                        }`
                                    }
                                >
                                    {page.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Mobile Menu"
                            aria-expanded={isOpen}
                            className="md:hidden text-white p-2 rounded hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        } bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500`}
                    aria-hidden={!isOpen}
                >
                    <div className="px-4 py-4 space-y-2">
                        {pages.map((page, index) => (
                            <NavLink
                                key={page.name}
                                to={page.path}
                                tabIndex={isOpen ? index + 10 : -1}
                                onClick={() => setIsOpen(false)}
                                aria-label={`Go to ${page.name} page`}
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${isActive
                                        ? "bg-white/20 text-yellow-300"
                                        : "text-white hover:text-yellow-300 hover:bg-white/10"
                                    }`
                                }
                            >
                                {page.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
