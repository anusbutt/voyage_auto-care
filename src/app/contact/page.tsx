import { FaMapMarkerAlt, FaEnvelope, FaFacebook } from 'react-icons/fa'; // Removed FaInstagram as it's not needed

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Service Area</h4>
                  <p>Serving all major cities in the USA</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:voyageautocare@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    voyageautocare@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Follow Us / Contact</h3> {/* Updated heading */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BdvANViCy/"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              {/* Direct Mail link added here, next to Facebook */}
              <a
                href="mailto:voyageautocare@gmail.com"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full" // Changed background color for email
                aria-label="Email Us"
              >
                <FaEnvelope size={20} /> {/* Using the email icon for the link */}
              </a>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Business Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}