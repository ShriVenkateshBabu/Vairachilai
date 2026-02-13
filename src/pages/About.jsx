import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import image from "../../public/images/Dr.s.vairachilai.jpeg";
const summaryPoints = [
    "16+ years of experience in engineering colleges and universities",
    "Published 3 SCI and 30+ Scopus-indexed journal papers",
    "Successfully guided 2 Ph.D. scholars to completion",
    "Currently supervising 7 Ph.D. scholars",
    "Expertise in Deep Learning, Machine Learning, and Data Science",
];
const experienceData = [
    {
        period: "22 Jul 2025 – Present",
        role: "Associate Professor",
        institution: "SR University, Warangal, Telangana",
        responsibilities: [
            "Teaching Computer Science & Artificial Intelligence courses",
            "Supervising UG, PG, and Ph.D. scholars",
            "Conducting research in Machine Learning and Deep Learning",
            "Publishing in indexed journals",
            "Contributing to academic development and curriculum design",
        ],
    },

    {
        period: "17 July 2024  – 21 Jul 2025 ",
        role: "Dean & Professor",
        institution: "School of Engineering & IT, Sanskriti University, Mathura, UP",
        responsibilities: [
            "Leading strategic growth of the School",
            "Managing academic operations, faculty, and resources",
            "Curriculum development as per NEP 2020 and NCrF",
            "Coordinating NAAC accreditation",
            "Promoting industry collaboration and research",
            "Overseeing recruitment and evaluation of staff",
        ],
    },
    {
        period: "28 Apr 2022 – 15 Jul 2024",
        role: "Head of the Department (Computational & Data Science)",
        institution: "VIT Bhopal University, Madhya Pradesh",
        responsibilities: [
            "Designed industry-aligned curriculum",
            "Established Data Science Laboratory",
            "Prepared quality procedures and audit documents",
            "Coordinated internal audits and QCM meetings",
        ],
    },
    {
        period: "10 Mar 2021 – 27 Apr 2022",
        role: "Associate Professor",
        institution: "CVR College of Engineering, Hyderabad",
        responsibilities: [
            "Taught Data Science and Machine Learning",
            "Guided student projects and research",
            "Published scholarly articles",
            "Supported academic development",
        ],
    },
    {
        period: "06 Jul 2015 – 09 Mar 2021",
        role: "Assistant Professor",
        institution: "IFHE, Hyderabad",
        responsibilities: [
            "Taught UG & PG courses in CSE",
            "Guided academic and research projects",
            "Published research papers",
            "Mentored students",
            "Organized workshops and seminars",
        ],
    },
    {
        period: "Jun 2011 – Jun 2015",
        role: "Assistant Professor",
        institution: "NPR College of Engineering & Technology, Dindigul, TN",
        responsibilities: [
            "Taught undergraduate courses",
            "Organized technical workshops",
            "Mentored students",
            "Provided career guidance",
        ],
    },
];


const About = () => {
    return (
        <div
            id="about"
            className="bg-gradient-to-b from-indigo-50 to-white min-h-screen"
        >
            <Box className="max-w-7xl mx-auto px-6 pt-28 pb-24">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <Typography
                        variant="h3"
                        className="font-bold text-gray-800 mb-4"
                    >
                        About Me
                    </Typography>
                </motion.div>

                {/* ================= PROFILE SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl border p-8 mb-20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10">

                        {/* Profile Image */}
                        <Avatar
                            src={image} // Put your image in public folder
                            alt="Profile"
                            sx={{
                                width: 180,
                                height: 180,
                                border: "5px solid #6366f1",
                            }}
                        />

                        {/* Info */}
                        <div className="text-center md:text-left">

                            <Typography
                                variant="h4"
                                className="font-bold text-gray-800 mb-2"
                            >
                                Dr. S. Vairachilai
                            </Typography>

                            <Typography
                                variant="h6"
                                className="text-indigo-600 mb-4"
                            >
                                Associate Professor – Computer Science & Artificial intelligence
                            </Typography>

                            <Typography
                                variant="body1"
                                className="text-gray-600 leading-relaxed"
                            >
                                Passionate educator and researcher specializing
                                in Machine Learning, Deep Learning, and Data
                                Science with proven academic leadership.
                            </Typography>

                        </div>

                    </div>
                </motion.div>

                {/* ================= CURRENT WORK ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-indigo-50 rounded-2xl p-8 mb-20"
                >
                    <Typography
                        variant="h5"
                        className="font-semibold text-gray-800 mb-4"
                    >
                        Current Position
                    </Typography>

                    <div className="space-y-2 text-gray-700">

                        <p>
                            <strong>Designation:</strong> Associate Professor
                        </p>

                        <p>
                            <strong>Institution:</strong> SR University,
                            Chennai
                        </p>

                        <p>
                            <strong>Department:</strong> Computer Science &
                            Engineering
                        </p>

                        <p>
                            <strong>Research Areas:</strong> AI, ML, Deep
                            Learning, Data Science
                        </p>

                    </div>
                </motion.div>

                {/* ================= SUMMARY ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg border p-8 mb-20"
                >

                    <Typography
                        variant="h5"
                        className="font-semibold text-gray-800 mb-6"
                    >
                        Professional Summary
                    </Typography>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700">

                        {summaryPoints.map((point, index) => (
                            <li key={index} className="flex gap-3">

                                <span className="text-indigo-600 font-bold text-lg">
                                    ✓
                                </span>

                                <span>{point}</span>

                            </li>
                        ))}

                    </ul>

                </motion.div>

                {/* ================= EXPERIENCE ================= */}
                <div className="mb-20">

                    <Typography
                        variant="h4"
                        className="font-bold text-gray-800 mb-12 text-center"
                    >
                        Work Experience
                    </Typography>

                    <div className="space-y-8 mt-10">

                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition"
                            >

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                                    <div>

                                        <Typography
                                            variant="h6"
                                            className="font-semibold text-gray-800"
                                        >
                                            {exp.role}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            className="text-gray-600 mt-1"
                                        >
                                            {exp.institution}
                                        </Typography>

                                    </div>

                                    <Typography
                                        variant="body2"
                                        className="text-indigo-600 font-medium mt-2 md:mt-0"
                                    >
                                        {exp.period}
                                    </Typography>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </Box>
        </div>
    );
};

export default About;
