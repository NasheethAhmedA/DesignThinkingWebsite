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
    const ScriptURL = "https://script.google.com/macros/s/AKfycbxSgs6C_2OiKa_kKGsvwmJ4MQGK626jwIv4zwCaLqffafrzLRqOCV1HsL3K4GERdtgk4g/exec";

    e.preventDefault();
    try {
      const response = await fetch(ScriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as Record<string, string>).toString()
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
          <a href="mailto:<kannammal.engineering@kingston.ac.in>" className="text-blue-600 text-sm hover:underline">kannammal.engineering@kingston.ac.in</a>
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
          <a href="https://maps.app.goo.gl/ch86WXPdK2S7n1YQA" className="text-blue-600 text-sm hover:underline">
            Kingston Engineering College<br />Vellore
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div id="SendMSG" className="max-w-4xl mx-auto mt-12 px-6 mb-20">
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
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 w-full"
            >
              <option value="">Please select</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Membership">Membership</option>
              <option value="Project">Project</option>
              <option value="EventProposal">Event Proposal</option>
              <option value="Complaint">Complaint</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
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
