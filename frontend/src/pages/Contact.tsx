import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:designthinking@university.edu" className="text-blue-600 hover:text-blue-800 transition-colors">
                  designthinking@university.edu
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>University Campus, Building 3</p>
                <p>Room 201</p>
              </div>
            </div>

            <div id="SendMSG" className="bg-white p-8 rounded-lg shadow-md">
              <h2  className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Please select</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Membership">Membership</option>
                    <option value="Event Proposal">Event Proposal</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Club Hours</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Our club office is open during the following hours. Feel free to stop by!
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                  <p className="font-semibold">Monday - Thursday</p>
                </div>
                <div className="text-right">
                  <p>10:00 AM - 4:00 PM</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Friday</p>
                </div>
                <div className="text-right">
                  <p>11:00 AM - 3:00 PM</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Saturday - Sunday</p>
                </div>
                <div className="text-right">
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;