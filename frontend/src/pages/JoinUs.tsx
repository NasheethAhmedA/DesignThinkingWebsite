import React from 'react';
import { Calendar, Users, Lightbulb, Award } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const benefits = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Workshops & Events',
    description: 'Access to exclusive workshops, seminars, and events led by industry professionals and design thinking experts.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Networking',
    description: 'Connect with like-minded peers, alumni, and professionals in the field of design and innovation.'
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Skill Development',
    description: 'Develop valuable skills in problem-solving, collaboration, critical thinking, and innovation.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Leadership Opportunities',
    description: 'Opportunities to lead projects, organize events, and contribute to the growth of the club.'
  }
];

const expectations = [
  {
    title: 'Active Participation',
    description: 'Regular attendance at club meetings and events, contributing to discussions and activities.'
  },
  {
    title: 'Project Involvement',
    description: 'Engagement in at least one design thinking project per semester.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'Willingness to work in teams and support fellow members in their learning journey.'
  },
  {
    title: 'Initiative',
    description: 'Taking initiative in organizing events, leading workshops, or mentoring new members.'
  }
];

const JoinUs: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Join Design Thinking Club</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Become part of our innovative community and embark on your design thinking journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Join Us?</h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <Benefit 
                  key={index} 
                  icon={benefit.icon} 
                  title={benefit.title} 
                  description={benefit.description} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Member Expectations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expectations.map((expectation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{expectation.title}</h3>
                <p className="text-gray-600">{expectation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Join</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Send Us a Message</h3>
                <p className="text-gray-600">
                  Interested in joining? Just click the “Apply Now” button below and send us a message requesting membership. It's quick and easy!
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Start as a Member</h3>
                <p className="text-gray-600">
                  Once we receive your request, you’ll be added as a club member. Begin participating in meetings, activities, and contributing to projects.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">3. Grow into a Co-ordinator</h3>
                <p className="text-gray-600">
                  Active members who consistently contribute and show leadership may be promoted to the role of Co-ordinator within the club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of innovators and help shape the future through design thinking.
          </p>
          <HashLink
            to="/contact#SendMSG" 
            smooth
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;