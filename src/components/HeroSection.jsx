import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../../public/images/Dr.s.vairachilai.jpeg";
import SRUniversityLogo from "../../public/images/Srlogo.png";

const HeroSection = () => {
    return (
        <Box className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Image */}
                <motion.div
                    className="flex justify-center md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <img
                        src={HeroImage}
                        alt="Dr. S. Vairachilai"
                        className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-xl border border-gray-200"
                    />
                </motion.div>

                {/* Right Content Card */}
                <motion.div
                    className="md:w-1/2 bg-white p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-200 space-y-5"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >

                    {/* University Info */}
                    <div className="flex items-center gap-5 mb-6">

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

                            <Typography
                                variant="body2"
                                className="text-gray-600 mt-1"
                            >
                                Associate Professor
                            </Typography>
                        </div>

                    </div>

                    {/* Name */}
                    <Typography
                        variant="h3"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600"
                    >
                        Dr. S. Vairachilai
                    </Typography>

                    {/* Department */}
                    <Typography
                        variant="subtitle1"
                        className="text-gray-700 font-medium"
                    >
                        Department of Computer Science & Artificial Intelligence
                    </Typography>

                    {/* Experience */}
                    <Typography
                        variant="body1"
                        className="text-gray-600 leading-relaxed"
                    >
                        Ph.D., Anna University | 15+ Years of Teaching & Research Experience
                    </Typography>

                    {/* Research */}
                    <Typography
                        variant="body1"
                        className="text-gray-600 leading-relaxed"
                    >
                        <span className="font-semibold text-gray-700">
                            Research Interests:
                        </span>{" "}
                        Machine Learning, Deep Learning, Social Network Analysis, Explainable AI (XAI)
                    </Typography>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 pt-4">


                        <Link to="/contact">
                            <Button
                                variant="contained"
                                className="!bg-indigo-600 hover:!bg-indigo-700 normal-case px-7 py-2.5 rounded-xl shadow-md"

                            > Contact</Button>
                        </Link>
                        <Button
                            variant="outlined"
                            className="!border-indigo-600 !text-indigo-600 hover:!bg-indigo-50 normal-case px-7 py-2.5 rounded-xl"
                        >
                            View Profile
                        </Button>

                    </div>

                </motion.div>

            </div >
        </Box >
    );
};

export default HeroSection;
