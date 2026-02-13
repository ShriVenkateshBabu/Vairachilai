import React from "react";
import { Box, Typography, Avatar, Chip, Divider } from "@mui/material";
import { motion } from "framer-motion";
import image from "../../public/images/Dr.s.vairachilai.jpeg";
import FacultyDevelopment from "../components/FacultyDevelopement";
import SubjectsMembership from "../components/SubjectMembership";
const summaryPoints = [
    "16+ years of experience in engineering colleges and universities",
    "Published 3 SCI and 30+ Scopus-indexed journal papers",
    "Successfully guided 2 Ph.D. scholars",
    "Currently supervising 7 Ph.D. scholars",
    "Expertise in Deep Learning, Machine Learning, and Data Science",
];

const experienceData = [
    {
        period: "Jul 2025 – Present",
        role: "Associate Professor",
        institution: "SR University, Warangal",
    },
    {
        period: "Jul 2024 – Jul 2025",
        role: "Dean & Professor",
        institution: "Sanskriti University, Mathura",
    },
    {
        period: "Apr 2022 – Jul 2024",
        role: "HOD (Computational & Data Science)",
        institution: "VIT Bhopal University",
    },
    {
        period: "Mar 2021 – Apr 2022",
        role: "Associate Professor",
        institution: "CVR College of Engineering, Hyderabad",
    },
    {
        period: "Jul 2015 – Mar 2021",
        role: "Assistant Professor",
        institution: "IFHE, Hyderabad",
    },
    {
        period: "Jun 2011 – Jun 2015",
        role: "Assistant Professor",
        institution: "NPR College, Dindigul",
    },
];

const About = () => {
    return (
        <div
            id="about"
            className="bg-gradient-to-b from-indigo-50 via-white to-white min-h-screen"
        >
            <Box className="max-w-7xl mx-auto px-6 pt-28 pb-24">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <Typography variant="h3" className="font-bold text-gray-800">
                        About Me
                    </Typography>

                    <p className="text-gray-600 mt-3">
                        Academic Profile & Professional Journey
                    </p>
                </motion.div>

                {/* ================= PROFILE CARD ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl border mb-20"
                >
                    <div className="grid md:grid-cols-3 gap-10 p-10 items-center">

                        {/* Image */}
                        <div className="flex justify-center">
                            <Avatar
                                src={image}
                                alt="Dr. S. Vairachilai"
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: "6px solid #6366f1",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                }}
                            />
                        </div>

                        {/* Info */}
                        <div className="md:col-span-2 space-y-4 text-center md:text-left">

                            <Typography variant="h4" className="font-bold">
                                Dr. S. Vairachilai
                            </Typography>

                            <Chip
                                label="Associate Professor • SR University"
                                color="primary"
                                className="font-medium"
                            />

                            <Typography
                                variant="body1"
                                className="text-gray-600 leading-relaxed"
                            >
                                Senior academician and researcher with strong
                                expertise in Artificial Intelligence, Machine
                                Learning, and Data Science. Experienced in
                                academic leadership and research supervision.
                            </Typography>

                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">

                                <Chip label="AI" variant="outlined" />
                                <Chip label="Machine Learning" variant="outlined" />
                                <Chip label="Deep Learning" variant="outlined" />
                                <Chip label="Data Science" variant="outlined" />
                                <Chip label="Social Networks" variant="outlined" />

                            </div>

                        </div>

                    </div>
                </motion.div>

                {/* ================= CURRENT POSITION ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-indigo-600 text-white rounded-2xl p-10 mb-20 shadow-lg"
                >
                    <Typography variant="h5" className="font-semibold mb-4">
                        Current Position
                    </Typography>

                    <Divider className="!bg-white/40 mb-5" />

                    <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">

                        <p>
                            <strong>Designation:</strong> Associate Professor
                        </p>

                        <p>
                            <strong>Institution:</strong> SR University, Warangal
                        </p>

                        <p>
                            <strong>Department:</strong> CS & AI
                        </p>

                        <p>
                            <strong>Experience:</strong> 16+ Years
                        </p>

                    </div>

                </motion.div>

                {/* ================= SUMMARY ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg border p-10 mb-20"
                >
                    <Typography
                        variant="h5"
                        className="font-semibold mb-8"
                    >
                        Professional Summary
                    </Typography>

                    <ul className="grid md:grid-cols-2 gap-5 text-gray-700">

                        {summaryPoints.map((point, index) => (
                            <li key={index} className="flex gap-3 items-start">

                                <span className="text-indigo-600 font-bold">
                                    ✓
                                </span>

                                <span>{point}</span>

                            </li>
                        ))}

                    </ul>

                </motion.div>

                {/* ================= EXPERIENCE TIMELINE ================= */}
                <div>

                    <Typography
                        variant="h4"
                        className="font-bold text-gray-800 mb-14 text-center"
                    >
                        Professional Experience
                    </Typography>

                    <div className="relative border-l-4 border-indigo-200 pl-8 space-y-10">

                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="relative"
                            >

                                {/* Dot */}
                                <div className="absolute -left-[42px] top-2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow" />

                                {/* Card */}
                                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">

                                    <Typography
                                        variant="h6"
                                        className="font-semibold"
                                    >
                                        {exp.role}
                                    </Typography>

                                    <p className="text-gray-600 mt-1">
                                        {exp.institution}
                                    </p>

                                    <p className="text-indigo-600 text-sm font-medium mt-2">
                                        {exp.period}
                                    </p>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </Box>
            <FacultyDevelopment />
            <SubjectsMembership />
        </div>
    );
};

export default About;
