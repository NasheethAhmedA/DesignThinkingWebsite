import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { AvatarImage } from '../images';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Divya Elumalai',
      role: 'Club President',
      image: AvatarImage // Placeholder image, replace with actual image URL
    },
    {
      name: 'Nasheeth Ahmed',
      role: 'Vice President',
      image: AvatarImage // Placeholder image, replace with actual image URL
    },
    { name: 'Abinaya A', role: 'coordinator', image: AvatarImage },
  { name: 'Bushra Jabeen I', role: 'coordinator', image: AvatarImage },
  { name: 'Harsh Kumar Dubey M', role: 'coordinator', image: AvatarImage },
  { name: 'Hepsibah Charlotte R', role: 'coordinator', image: AvatarImage },
  { name: 'Janani A', role: 'coordinator', image: AvatarImage },
  { name: 'Lokeshwaran B', role: 'coordinator', image: AvatarImage },
  { name: 'Saara Zakir', role: 'coordinator', image: AvatarImage },
  { name: 'Saranya', role: 'coordinator', image: AvatarImage },
  { name: 'Hemalatha. S', role: 'coordinator', image: AvatarImage },
  { name: 'Janani N', role: 'coordinator', image: AvatarImage },
  { name: 'Shalini', role: 'coordinator', image: AvatarImage },
  { name: 'Thirumalai Vasan', role: 'coordinator', image: AvatarImage },
  { name: 'Sanjeev', role: 'coordinator', image: AvatarImage },
  { name: 'Udhai', role: 'coordinator', image: AvatarImage },
  { name: 'Hamsavahini', role: 'coordinator', image: AvatarImage },
  { name: 'Keerthana', role: 'coordinator', image: AvatarImage },
  { name: 'Pooja', role: 'coordinator', image: AvatarImage }
    
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We believe in pushing boundaries and exploring new possibilities.',
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />
    },
    {
      title: 'Collaboration',
      description: 'We value teamwork and diverse perspectives in solving complex problems.',
      icon: <Users className="h-10 w-10 text-blue-600" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in all our efforts and initiatives.',
      icon: <Award className="h-10 w-10 text-blue-600" />
    },
    {
      title: 'Purpose',
      description: 'We are driven by a clear purpose to make a positive impact.',
      icon: <Target className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
    <div>
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6" id='AboutUs'>About Design Thinking Club</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a community of innovators dedicated to solving complex problems through design thinking methodologies.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Design Thinking Club is dedicated to fostering a culture of innovation and creative problem-solving 
              among students through the principles and methodologies of design thinking. We aim to equip our members 
              with the skills, mindsets, and tools needed to address complex challenges and create meaningful solutions.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a community where design thinking becomes a natural approach to problem-solving, where 
              students from diverse disciplines collaborate to tackle real-world challenges, and where innovation 
              thrives through empathy, experimentation, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" id='OurApproach'>Our Approach</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            We follow the five-stage design thinking process:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold mb-2">Empathize</h3>
              <p className="text-gray-600">Understanding the needs and challenges of users through research.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold mb-2">Define</h3>
              <p className="text-gray-600">Clearly defining the problem based on user needs and insights.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold mb-2">Ideate</h3>
              <p className="text-gray-600">Generating a wide range of creative ideas and potential solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold mb-2">Prototype</h3>
              <p className="text-gray-600">Building simple versions of potential solutions for testing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold mb-2">Test</h3>
              <p className="text-gray-600">Testing prototypes with users to gather feedback and refine solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;