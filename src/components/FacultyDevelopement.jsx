import React from "react";

const facultyData = [
    {
        topic: "Deep Learning and its Applications",
        event: "INTERNATIONAL CONFERENCE ON AI AND CLOUD – Keynote Speaker",
        period: "21.02.2025",
    },
    {
        topic: "Social Media Prediction for Sales using Regression Analysis",
        event: "DMI College of Engineering, Chennai",
        period: "10.11.2023",
    },
    {
        topic: "Applied Data Science & its Applications",
        event: "Xavier Institute of Engineering, Mumbai",
        period: "06 - 12 Jan, 2023",
    },
    {
        topic: "Regression Analysis: Mother of all Models: Online Media Case Study",
        event: "The American College, Madurai, Tamilnadu",
        period: "1st October, 2022",
    },
    {
        topic: "ISTE Approved online FDP on Deep Learning and its Applications",
        event: "Xavier Institute of Engineering, Mumbai",
        period: "5-10 July, 2021",
    },
    {
        topic: "Case Studies on Marketing Mix Modeling (MMM) using Regression Analysis",
        event: "CHRIST, Deemed University, Bangalore",
        period: "30 March, 2021",
    },
    {
        topic: "Case Studies on Regression & Decision Tree",
        event: "Xavier Institute of Engineering, Mumbai",
        period: "17 March, 2021",
    },
    {
        topic: "Data Science and Machine Learning",
        event: "Mannar Thirumalai Naicker College, Madurai, Tamilnadu",
        period: "06-02-2020",
    },
    {
        topic: "Compiler Optimization with Computational Intelligence and Cyber Security",
        event: "SRM, Valliammai Engineering College, Chennai",
        period: "21-12-2020 to 29-12-2020",
    },
    {
        topic: "Data Science Prerequisites",
        event: "SFR College, Sivakasi, Tamilnadu",
        period: "16.07.2020",
    },
    {
        topic: "Image Processing Towards Data Science",
        event: "Meenakshi College Of Engineering, Chennai",
        period: "6-10 July, 2020",
    },
    {
        topic: "Machine Learning and Data Science for Engineering Applications",
        event: "Shadan College of Engineering & Technology, Hyderabad",
        period: "5-10 June, 2020",
    },
    {
        topic: "Machine learning using Python & R programming (learn by coding)",
        event: "Narsimha Reddy Engineering College, Hyderabad",
        period: "8-10 July, 2019",
    },
    {
        topic: "Data Analysis",
        event: "T. John College, Bangalore",
        period: "15 Feb 2019",
    },
    {
        topic: "Advanced Research Tools and Its Applications in Current Management Practices",
        event: "T. John College, Bangalore",
        period: "24-25 May, 2019",
    },
];

const FacultyDevelopment = () => {
    return (
        <div className="min-h-screen bg-gray-50  px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Faculty Development Programmes / Conferences
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300 shadow-md rounded-lg">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left">Topic Delivered</th>
                                <th className="px-6 py-3 text-left">Event / Institution</th>
                                <th className="px-6 py-3 text-left">Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facultyData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                        } hover:bg-indigo-50 transition`}
                                >
                                    <td className="px-6 py-4 text-gray-800">{item.topic}</td>
                                    <td className="px-6 py-4 text-gray-700">{item.event}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FacultyDevelopment;
