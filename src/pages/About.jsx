import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const summaryPoints = [
    "15 years of experience in engineering colleges and universities",
    "Published 3 SCI and 25+ Scopus-indexed journal papers",
    "Successfully guided 2 Ph.D. scholars to completion",
    "Currently supervising 7 Ph.D. scholars",
    "Expertise in Deep Learning, Machine Learning, and Data Science",
];

const educationData = [
    {
        period: "2012 – 2018",
        degree: "Ph.D. in Computer Science & Engineering",
        institution: "Anna University, Chennai, Tamil Nadu",
        details: [
            "Research Area: Deep Learning, Data Science, Machine Learning, Recommender Systems, Social Network Analysis",
            "Thesis: An Effective Community Detection-Based Approach to Solve the Cold Start Problem in Recommender Systems",
        ],
    },
    {
        period: "2009 – 2011",
        degree: "M.Tech in Computer Application",
        institution: "Kalasalingam University",
        details: ["University Rank Holder – CGPA 7.62"],
    },
    {
        period: "2006 – 2009",
        degree: "MCA (Master of Computer Applications)",
        institution:
            "V.V. Vanniaperumal College for Women, Madurai Kamaraj University",
        details: ["First Class with Distinction – 82%"],
    },
    {
        period: "1994 – 1997",
        degree: "B.Sc. in Physics",
        institution: "N.M.S.S.V.N College, Madurai Kamaraj University",
        details: ["First Class – 76%"],
    },
];

const About = () => {
    return (
        <div id="about" className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <Box className="max-w-7xl mx-auto px-6 pt-28 pb-24">

                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <Typography
                        variant="h3"
                        className="font-bold text-gray-800 mb-3"
                    >
                        About Me
                    </Typography>
                </motion.div>

                {/* ================= SUMMARY ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-20"
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

                                <span className="text-indigo-600 font-bold text-lg">✓</span>

                                <span className="leading-relaxed">{point}</span>

                            </li>
                        ))}

                    </ul>

                </motion.div>

                {/* ============ ACADEMIC QUALIFICATIONS ============ */}
                <div>

                    <Typography
                        variant="h4"
                        className="font-bold text-gray-800 mb-14 text-center"
                    >
                        Academic Qualifications
                    </Typography>

                    <div className="space-y-12">

                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl transition"
                            >

                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

                                    <Typography
                                        variant="h6"
                                        className="font-semibold text-gray-800"
                                    >
                                        {edu.degree}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        className="text-indigo-600 font-medium mt-2 md:mt-0"
                                    >
                                        {edu.period}
                                    </Typography>

                                </div>

                                {/* Institution */}
                                <Typography
                                    variant="body1"
                                    className="text-gray-700 font-medium mb-3"
                                >
                                    {edu.institution}
                                </Typography>

                                {/* Details */}
                                <ul className="space-y-2 text-gray-600 text-sm">

                                    {edu.details.map((item, i) => (
                                        <li key={i} className="flex gap-2">

                                            <span className="text-indigo-500 font-bold">•</span>

                                            <span className="leading-relaxed">{item}</span>

                                        </li>
                                    ))}

                                </ul>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </Box>

        </div>
    );
};

export default About;
