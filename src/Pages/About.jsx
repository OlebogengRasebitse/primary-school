import TeacherGallery from "../components/TeacherGallery";

function About() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-blue-900">MISSION STATEMENT</h1>
      <p className="text-base leading-relaxed">
        At Tsitsing Primary School, our mission is to provide quality, inclusive education that empowers every learner to reach their full potential. We are committed to creating a safe, supportive environment where learning is active, values are taught, and each child is encouraged to grow intellectually, socially, and emotionally.</p>
      <br /> <br />
      <h1 className="text-3xl font-bold mb-4 text-blue-900">VISION STATEMENT</h1>
      <p className="text-base leading-relaxed">To be a leading public school in Tsitsing Village, known for academic excellence, strong community values, and preparing confident, responsible learners for a changing world </p>
      <br />
          <h1 className="text-2xl font-bold mb-4 text-blue-900">OUR CORE VALUES</h1>
      <ul className="list-disc list-inside space-y-1">
      <li><span className="font-bold">Respect</span> – We treat each other with kindness and dignity.</li>
      <li><span className="font-bold">Integrity</span> – We are honest, responsible, and accountable.</li>
      <li><span className="font-bold">Excellence</span> – We strive for high standards in learning and behavior.</li>
      <li><span className="font-bold">Community</span> – We work together with parents, teachers, and local leaders.</li>
      <li><span className="font-bold">Growth</span> – We support continuous learning, curiosity, and personal development.</li>
    </ul>

<hr className="my-8 border-t-2 border-blue-900" />
 <h1 className="text-3xl font-bold mb-4 text-blue-900">MEET OUR STAFF</h1> 
       <TeacherGallery />
    </>
  );
}

export default About