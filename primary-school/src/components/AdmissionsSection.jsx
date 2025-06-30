function AdmissionsSection() {
    return ( 
        <>
        <hr className="my-8 border-t-2 border-blue-900" />
         <h1 className="text-3xl font-bold mb-4">ENROLMENT</h1>
        {/* max-w-xl */}
        <section className="mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-md">
  <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">Dear Parents / Guardians</h2>

  <p className="mb-4 text-sm sm:text-base">
    Thank you for your enquiry regarding placement for your child at <strong>Tsitsing Primary School</strong> for the <strong>2025 academic year</strong>.
    Please note that Tsitsing Primary is a <strong>public school located in Tsitsing Village</strong>, and while we aim to accommodate as many learners as possible, <span className="font-semibold text-red-600">placement is not guaranteed</span>.
    Applications will be placed on a <strong>waiting list</strong> and processed based on our admissions criteria.
  </p>

  <h3 className="text-lg font-bold text-blue-800 mb-2">Application Process:</h3>
  <ol className="list-decimal list-inside mb-4 space-y-1 text-sm sm:text-base">
    <li>
      <strong>Download and complete</strong> the Tsitsing Primary School Application Form.
      <br />
      <a
        href="/files/Tsitsing_Application_Form_2025.pdf"
        download
        className="inline-block mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
        aria-label="Download application form"
      >
        Download Application Form
      </a>
    </li>
    <li>
      <strong>Submit</strong> the completed form along with all required certified documents to:{" "}
      <a href="mailto:admissions@tsitsingprimary.co.za" className="text-blue-600 underline">
        admissions@tsitsingprimary.co.za
      </a>
      <br />
      Alternatively, you may hand-deliver it to the school office during school hours.
    </li>
  </ol>

  <h3 className="text-lg font-bold text-blue-800 mb-2">Required Certified Documents:</h3>
  <ul className="list-disc list-inside mb-4 space-y-1 text-sm sm:text-base">
    <li>Learner’s Unabridged Birth Certificate</li>
    <li>Latest School Report (if applicable)</li>
    <li>Parent/Guardian ID or Passport</li>
    <li>Proof of residence (e.g., municipal account, lease agreement, or tribal authority letter)</li>
  </ul>
  <p className="text-red-600 font-semibold mb-4 text-sm sm:text-base">
    Note: No affidavits or bank statements will be accepted.
  </p>

  <h3 className="text-lg font-bold text-blue-800 mb-2">Additional Documents (for non-South African citizens):</h3>
  <ul className="list-disc list-inside mb-4 space-y-1 text-sm sm:text-base">
    <li>Permanent Residence Permit</li>
    <li>Study Permit</li>
    <li>Diplomatic Visa</li>
    <li>Asylum or Refugee Permit</li>
  </ul>

  <h3 className="text-lg font-bold text-blue-800 mb-2">Placement Guidelines</h3>
  <p className="mb-4 text-sm sm:text-base">
    <strong>Priority</strong> will be given to learners residing within the school’s feeder zone.<br />
    Once all required documents are submitted and verified, you will be issued a <strong>waiting list number</strong>.<br />
    If space becomes available, the school will contact you telephonically.
  </p>

  <h3 className="text-lg font-bold text-blue-800 mb-2">School Fees – 2025</h3>
  <p className="text-sm sm:text-base">
    Tsitsing Primary School is a <strong>Quintile 2 public school</strong>.<br />
    There are <strong>no compulsory school fees</strong>, but <em>voluntary contributions</em> are encouraged to support teaching and learning resources.<br />
    If applicable, a small <strong>administration or support fee</strong> may be requested by the School Governing Body.
  </p>
  <p className="mt-4 text-sm sm:text-base">
    We are committed to providing <strong>quality education regardless of financial circumstances</strong>, and we appreciate the support of our school community.
  </p>
</section>

        </>
     );
}

export default AdmissionsSection;