import React from "react";

/* Journal Papers with DOI / Links */
const journalPapers = [
    {
        title:
            "People Food Predictor Model Using Machine Learning Technique",
        journal: "Inder Science, 2025",
        link: null,
    },
    {
        title:
            "Efficient Clinical Decision-Making in Nephrology",
        journal: "IJMEI, 2025",
        link: "https://doi.org/10.1504/IJMEI.2025.10068832",
    },
    {
        title:
            "Monkeypox Diagnosis using Conditional GANs",
        journal: "J. Ambient Intelligence, 2025",
        link: "https://doi.org/10.1007/s12652-024-04940-6",
    },
    {
        title:
            "Student Performance Forecasting",
        journal: "SSRG Journal, 2024",
        link: "https://doi.org/10.14445/23488549/IJECE-V11I12P114",
    },
    {
        title:
            "PCOS Prediction using ML",
        journal: "Informatics for Health Care, 2024",
        link: "https://doi.org/10.1080/17538157.2024.2405868",
    },
    {
        title:
            "Obesity Impact Analysis",
        journal: "Open Biomedical Journal, 2024",
        link: "https://doi.org/10.2174/0118741207289421240430115207",
    },
];

/* Conferences */
const conferences = [
    {
        title: "COVID-19 Disease Prediction using Textual Data",
        event: "RAWCET 2022",
        link: null,
    },
    {
        title: "Students Dropout Prediction using ML",
        event: "Virtual Conference 2021",
        link: null,
    },
    {
        title: "Face Recognition Survey",
        event: "Hyderabad, 2018",
        link: null,
    },
    {
        title: "Recommender System Survey",
        event: "National Conf, 2014",
        link: null,
    },
];

/* Workshops */
const workshops = [
    "FDP on Machine Learning – NIT Warangal (2019)",
    "Big Data Analytics – ICFAI Hyderabad (2019)",
    "ML Applications FDP – ICFAI (2018)",
    "Database Workshop – IIT Bombay (2013)",
    "Research Methods Workshop – IIT Bombay (2013)",
];

/* Patents */
const patents = [
    "Fuzzy Logic-Based Solar Dryer",
    "Human Face Generation using GAN",
    "Blockchain-Based Healthcare System",
    "Data Transmission Method",
];

/* Books */
const books = [
    "Recommender Systems – CRC Press (2021)",
    "NodeJS & Postman – IGI Global",
];

const Publications = () => {
    return (
        <section
            id="publications"
            className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 mb-14">
                    Publications & Achievements
                </h2>

                {/* Journal Publications */}
                <Section title="📘 Journal Publications">
                    {journalPapers.map((paper, index) => (
                        <Card key={index}>
                            <h4 className="font-semibold text-gray-800">
                                {paper.title}
                            </h4>

                            <p className="text-sm text-gray-600 mt-1">
                                {paper.journal}
                            </p>

                            {paper.link && (
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
                                >
                                    View DOI →
                                </a>
                            )}
                        </Card>
                    ))}
                </Section>

                {/* Conferences */}
                <Section title="🎤 Conferences">
                    {conferences.map((conf, index) => (
                        <Card key={index}>
                            <h4 className="font-semibold text-gray-800">
                                {conf.title}
                            </h4>

                            <p className="text-sm text-gray-600 mt-1">
                                {conf.event}
                            </p>

                            {conf.link && (
                                <a
                                    href={conf.link}
                                    target="_blank"
                                    className="text-indigo-600 mt-2 inline-block"
                                >
                                    View Paper →
                                </a>
                            )}
                        </Card>
                    ))}
                </Section>

                {/* Workshops */}
                <Section title="🧑‍🏫 Workshops & FDPs">
                    <SimpleList data={workshops} />
                </Section>

                {/* Patents */}
                <Section title="📜 Patents">
                    <SimpleList data={patents} />
                </Section>

                {/* Books */}
                <Section title="📚 Books Published">
                    <SimpleList data={books} />
                </Section>

            </div>
        </section>
    );
};

/* Reusable Section */
const Section = ({ title, children }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-4">
            {title}
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
            {children}
        </div>
    </div>
);

/* Card */
const Card = ({ children }) => (
    <div
        className="bg-white p-6 rounded-xl border border-gray-200
               shadow-md hover:shadow-xl hover:-translate-y-1
               transition-all duration-300"
    >
        {children}
    </div>
);

/* Simple List */
const SimpleList = ({ data }) => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
            {data.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default Publications;
