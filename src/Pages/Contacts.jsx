function Contact() {
    return (
       <>
        <section className="my-12 max-w-3xl mx-auto px-4">
           <img 
          src="/Banner.png"
          alt="Contact Us Banner"
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Contact Us</h2>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input 
            type="text"
            name="subject"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            name="message"
            rows="4"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
      <br /><br />
       <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Our Location</h3>
        <div className="w-full h-72 rounded-lg overflow-hidden shadow">
          <iframe
            title="School Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.381319794615!2d27.321906700000003!3d-25.4712934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe718364e50989%3A0x79f9cb70c3c57c65!2sTsitsing%20Primary%20School!5e1!3m2!1sen!2sza!4v1751377165422!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
    </section>
       </>
    );
}

export default Contact;