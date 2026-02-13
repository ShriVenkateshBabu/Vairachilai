import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
        institution: "V.V. Vanniaperumal College for Women, Madurai Kamaraj University",
        details: ["First Class with Distinction – 82%"],
    },
    {
        period: "1994 – 1997",
        degree: "B.Sc. in Physics",
        institution: "N.M.S.S.V.N College, Madurai Kamaraj University",
        details: ["First Class – 76%"],
    },
];

const Education = () => {
    return (
        <Box className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Title */}
                <Typography
                    variant="h4"
                    className="font-bold text-gray-800 mb-16 text-center"
                >
                    Academic Qualifications
                </Typography>

                {/* Timeline */}
                <div className="relative space-y-12">

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex gap-8"
                        >

                            {/* Timeline Line */}
                            <div className="flex flex-col items-center">

                                <div className="w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10" />

                                {index !== educationData.length - 1 && (
                                    <div className="w-1 flex-1 bg-indigo-200 mt-2" />
                                )}

                            </div>

                            {/* Card */}
                            <div className="bg-white w-full p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition">

                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                                    <Typography
                                        variant="h6"
                                        className="font-semibold text-gray-800 flex items-center gap-2"
                                    >
                                        {edu.degree}
                                        <ArrowRightIcon className="w-5 h-5 text-indigo-500" />
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
                                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">

                                    {edu.details.map((item, i) => (
                                        <li key={i} className="flex gap-2">

                                            <span className="text-indigo-500 font-bold">•</span>

                                            <span>{item}</span>

                                        </li>
                                    ))}

                                </ul>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </Box>
    );
};

export default Education;
