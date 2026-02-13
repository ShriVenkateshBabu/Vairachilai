import React from "react";

const journalPapers = [
    "People Food Predictor Model Using Machine Learning Technique, Inder Science, 2025",
    "Clinical Decision-Making in Nephrology, IJMEI, 2025",
    "Monkeypox Diagnosis using GANs, J. Ambient Intelligence, 2025",
    "Student Performance Forecasting, SSRG Journal, 2024",
    "PCOS Prediction using ML, Informatics for Health Care, 2024",
    "Obesity Impact Analysis, Open Biomedical Journal, 2024",
];

const conferences = [
    "COVID-19 Disease Prediction – RAWCET 2022",
    "Students Dropout Prediction – 2021",
    "Face Recognition Survey – 2018",
    "Supermarket Sales Analysis – 2017",
    "Recommender System Survey – 2014",
];

const workshops = [
    "FDP on Machine Learning – NIT Warangal (2019)",
    "Big Data Analytics – ICFAI Hyderabad (2019)",
    "ML Applications FDP – ICFAI (2018)",
    "Database Workshop – IIT Bombay (2013)",
    "Research Methods Workshop – IIT Bombay (2013)",
];

const patents = [
    "Fuzzy Logic-Based Solar Dryer",
    "Human Face Generation using GAN",
    "Blockchain-Based Healthcare System",
    "Data Transmission Method",
];

const books = [
    "Recommender Systems – CRC Press (2021)",
    "NodeJS & Postman – IGI Global",
];

const Publications = () => {
    return (
        <section
            id="publications"
            className="min-h-screen bg-gray-50 pt-28 pb-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
                    Publications & Achievements
                </h2>

                {/* Journal Papers */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        📘 Journal Publications
                    </h3>

                    <ul className="space-y-3 text-gray-700 list-decimal list-inside">
                        {journalPapers.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Conferences */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        🎤 Conferences
                    </h3>

                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        {conferences.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Workshops */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        🧑‍🏫 Workshops & FDPs
                    </h3>

                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        {workshops.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Patents */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        📜 Patents
                    </h3>

                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        {patents.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Books */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        📚 Books Published
                    </h3>

                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        {books.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Publications;
