import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Detailed work experience data
const workExperienceData = [
    {
        role: "Associate Professor",
        institution: "SR University, Warangal",
        period: "Jul 2025 – Present",
    },
    {
        role: "Dean & Professor",
        institution: "Sanskriti University, Mathura",
        period: "Jul 2024 – Jul 2025",
    },
    {
        role: "HOD (Computational & Data Science)",
        institution: "VIT Bhopal University",
        period: "Apr 2022 – Jul 2024",
    },
    {
        role: "Associate Professor",
        institution: "CVR College of Engineering, Hyderabad",
        period: "Mar 2021 – Apr 2022",
    },
    {
        role: "Assistant Professor",
        institution: "IFHE, Hyderabad",
        period: "Jul 2015 – Mar 2021",
    },
    {
        role: "Assistant Professor",
        institution: "NPR College, Dindigul",
        period: "Jun 2011 – Jun 2015",
    },
];

const WorkExperience = () => {
    return (
        <Box className="bg-gray-50 py-16 px-4">
            <Box className="max-w-5xl mx-auto">

                {/* Header */}
                <Typography
                    variant="h4"
                    className="font-bold text-gray-800 mb-14 text-center"
                >
                    Professional Experience
                </Typography>

                {/* Timeline */}
                <div className="relative border-l-4 border-indigo-200 pl-8 space-y-10">
                    {workExperienceData.map((exp, index) => (
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
                                <Typography variant="h6" className="font-semibold">
                                    {exp.role}
                                </Typography>
                                <p className="text-gray-600 mt-1">{exp.institution}</p>
                                <p className="text-indigo-600 text-sm font-medium mt-2">
                                    {exp.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Box>
        </Box>
    );
};

export default WorkExperience;
