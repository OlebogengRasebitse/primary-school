import AdmissionsSection from "../components/AdmissionsSection";
import Timetables from "../components/TimeTables.";

function Resources() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4 text-blue-900">SCHOOL TIMETABLES</h1>
            <Timetables />
            <AdmissionsSection />
        </>
    );
}

export default Resources;