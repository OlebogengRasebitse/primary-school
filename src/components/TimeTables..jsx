export default function Timetables() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-8">
            {/* Grade 1–7 Class Timetables */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Grade 1–7 Class Timetables</h2>
                <p className="mb-4 text-gray-700">Click on a grade to view the timetable:</p>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"].map((grade) => (
                        <li
                            key={grade}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded shadow text-center cursor-pointer"
                        >
                            {grade}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Exam Timetable */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Exam Timetable</h2>
                <p className="mb-2 text-gray-700">Download the latest exam schedule below:</p>
                <a
                    href="https://www.google.com/"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Exam Timetable
                </a>
            </div>

            {/* Extra-Mural Timetable */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Extra-Mural Timetable</h2>
                <p className="mb-2 text-gray-700">Explore the timetable for sports, clubs, and afternoon programs:</p>
                <a
                    href="https://www.google.com/"
                    className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Extra-Mural Timetable
                </a>
            </div>
        </section>
    );
}
