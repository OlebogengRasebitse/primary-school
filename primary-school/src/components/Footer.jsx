import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Tsitsing Primary School</h2>
          <p>📍 Tsitsing Village, South Africa</p>
          <p>📞 012 345 6789</p>
          <p>✉️ tsitsingprimary@example.com</p>
        </div>

        {/* School Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">School Info</h2>
          <p>School Days: Monday – Friday</p>
          <p>School Hours: 07:30 AM – 14:00 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex justify-center  gap-4 text-xl mt-2">

            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-6 text-xs text-blue-200 border-t border-blue-700 pt-4">
        ©2025 Tsitsing Primary School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
