import React from "react";

const subjectsHandled = [
    "XAI",
    "Machine Learning",
    "Data Science",
    "Data Visualization",
    "Data Warehousing and Mining",
    "Python Programming",
    "R Programming",
    "Computer Programming",
    "UNIX Operating System",
    "Data Structures and Algorithms",
    "Cryptography and Network Security",
    "Operating System",
    "Deep Learning",
];

const professionalMemberships = [
    "Life Member of The Indian Society for Technical Education (ISTE)",
];

const SubjectsMembership = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Subjects Handled */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Subjects Handled
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {subjectsHandled.map((subject, index) => (
                            <li key={index}>{subject}</li>
                        ))}
                    </ul>
                </div>

                {/* Professional Memberships */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Professional Memberships
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {professionalMemberships.map((member, index) => (
                            <li key={index}>{member}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SubjectsMembership;
