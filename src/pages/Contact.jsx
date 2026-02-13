import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen mt-2 bg-gray-50 flex items-center justify-center py-16 px-4">
            <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left Section - Info */}
                <div className="bg-indigo-600 text-white p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-indigo-100 mb-8">
                            Feel free to contact me for any projects, collaborations, or queries.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <a href="mailto:vairachilai@sru.edu">
                                    <span>vairachilai@sru.edu</span>
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <a href="tel:+918106813402" className="hover:text-blue-200 transition">
                                    +91 8106813402
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span>Chennai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Social / Profile Links */}
                    <div className="flex gap-4 mt-8">

                        {/* LinkedIn */}
                        <a
                            href="http://linkedin.com/in/vairachilai-shenbagavel-2962a550"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={18} />
                        </a>

                        {/* Google Scholar (custom SVG) */}
                        <a
                            href="https://scholar.google.com/citations?user=pLMsyXMAAAAJ&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition"
                            aria-label="Google Scholar Profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="p-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>

                    <form className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
