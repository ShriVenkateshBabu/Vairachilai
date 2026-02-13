import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import HeroImage from "../../public/images/Dr.s.vairachilai.jpeg";
import SRUniversityLogo from "../../public/images/Srlogo.png";

const HeroSection = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Dr. S. Vairachilai | Associate Professor & Researcher</title>
                <meta
                    name="description"
                    content="Official profile of Dr. S. Vairachilai - Associate Professor at SR University, with 16+ years of teaching and research experience in AI, Machine Learning, and Social Network Analysis."
                />
                <meta
                    name="keywords"
                    content="Dr S Vairachilai, SR University, AI Researcher, Machine Learning, Explainable AI, Professor, Publications"
                />
                <meta name="author" content="Dr. S. Vairachilai" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Open Graph for social sharing */}
                <meta property="og:title" content="Dr. S. Vairachilai" />
                <meta
                    property="og:description"
                    content="Associate Professor at SR University with research in AI, Machine Learning, and Social Network Analysis."
                />
                <meta property="og:image" content={HeroImage} />
                <meta property="og:type" content="website" />
            </Helmet>

            <Box className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Image with subtle floating motion */}
                    <motion.div
                        className="flex justify-center md:w-1/2"
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        aria-label="Portrait of Dr. S. Vairachilai"
                    >
                        <img
                            src={HeroImage}
                            alt="Dr. S. Vairachilai"
                            className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Right Content Card */}
                    <motion.div
                        className="md:w-1/2 bg-white p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-200 space-y-5"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* University Info */}
                        <motion.div
                            className="flex items-center gap-5 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img
                                src={SRUniversityLogo}
                                alt="SR University Logo"
                                className="w-16 h-16 object-contain"
                            />
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    className="font-semibold text-gray-800"
                                >
                                    SR University
                                </Typography>
                                <Typography variant="body2" className="text-gray-600 mt-1">
                                    Associate Professor
                                </Typography>
                            </div>
                        </motion.div>

                        {/* Name (static, no floating) */}
                        <Typography
                            variant="h3"
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600"
                            aria-label="Dr. S. Vairachilai"
                        >
                            Dr. S. Vairachilai
                        </Typography>

                        {/* Department */}
                        <Typography
                            variant="subtitle1"
                            className="text-gray-700 font-medium"
                            aria-label="Department of Computer Science and Artificial Intelligence"
                        >
                            Department of Computer Science & Artificial Intelligence
                        </Typography>

                        {/* Experience */}
                        <Typography
                            variant="body1"
                            className="text-gray-600 leading-relaxed"
                            aria-label="16 plus years of teaching and research experience"
                        >
                            Ph.D., Anna University | 16+ Years of Teaching & Research Experience
                        </Typography>

                        {/* Research Interests */}
                        <Typography
                            variant="body1"
                            className="text-gray-600 leading-relaxed"
                            aria-label="Research interests in Explainable AI, Machine Learning, Deep Learning, Social Network Analysis"
                        >
                            <span className="font-semibold text-gray-700">Research Interests:</span>{" "}
                            Explainable AI, Machine Learning, Deep Learning, Social Network Analysis
                        </Typography>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-5 pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Link to="/contact">
                                <Button
                                    variant="contained"
                                    className="!bg-indigo-600 hover:!bg-indigo-700 normal-case px-7 py-2.5 rounded-xl shadow-md"
                                    aria-label="Contact Dr. S. Vairachilai"
                                >
                                    Contact
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    variant="outlined"
                                    className="!border-indigo-600 !text-indigo-600 hover:!bg-indigo-50 normal-case px-7 py-2.5 rounded-xl"
                                    aria-label="View Dr. S. Vairachilai Profile"
                                >
                                    View Profile
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </Box>
        </>
    );
};

export default HeroSection;
