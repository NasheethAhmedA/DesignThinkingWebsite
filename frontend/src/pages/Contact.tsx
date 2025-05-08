import React, { useState } from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  return (
    <section className="bg-white">
      {/* Blue Header */}
      <div className="bg-blue-700 text-white py-10 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-2 text-md">Have questions or want to get involved? We'd love to hear from you.</p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Mail className="mx-auto text-blue-600 mb-2" size={32} />
          <h4 className="font-semibold">Email</h4>
          <a href="mailto:<kannamal.engineering@kingston.ac>" className="text-gray-600 text-sm">kannamal.engineering@kingston.ac</a>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Linkedin className="mx-auto text-blue-600 mb-2" size={32} />
          <h4 className="font-semibold">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/company/design-thinking-club-kingston/"
            className="text-blue-600 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design Thinking Club
          </a>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <MapPin className="mx-auto text-blue-600 mb-2" size={32} />
          <h4 className="font-semibold">Location</h4>
          <p className="text-gray-600 text-sm">
            Kingston Engineering College<br />Vellore
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-12 px-6 mb-20">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-3 w-full"
              />
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
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 w-full"
            >
              <option value="">Please select</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Feedback">Feedback</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="border border-gray-300 rounded-md p-3 w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
            >
              Send Message
            </button>
            {formSubmitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
