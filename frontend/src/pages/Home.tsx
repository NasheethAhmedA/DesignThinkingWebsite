import React from 'react';
import Carousel from '../components/Carousel';
import { ArrowRight, Calendar, Users, Lightbulb, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const carouselSlides = [
  {
    id: 1,
    title: 'Design Thinking Workshop',
    description: 'Join our upcoming workshop to learn the fundamentals of design thinking methodology.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttonText: 'Register Now',
    buttonLink: '/events'
  },
  {
    id: 2,
    title: 'Innovation Challenge 2025',
    description: 'Participate in our annual innovation challenge and win exciting prizes.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttonText: 'Learn More',
    buttonLink: '/events'
  },
  {
    id: 3,
    title: 'Join Our Community',
    description: 'Become a member of our vibrant community of design thinkers and innovators.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttonText: 'Join Now',
    buttonLink: '/join-us'
  }
];

const quickLinks = [
  {
    title: 'Upcoming Events',
    description: 'Check out our upcoming workshops and seminars.',
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    link: '/events'
  },
  {
    title: 'About Us',
    description: 'Learn about our mission and vision.',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    link: '/about'
  },
  {
    title: 'Our Approach',
    description: 'Discover our unique design thinking methodology.',
    icon: <Lightbulb className="h-8 w-8 text-green-500" />,
    link: '/about'
  },
  {
    title: 'Projects',
    description: 'Explore our past and ongoing projects.',
    icon: <BookOpen className="h-8 w-8 text-purple-500" />,
    link: '/showcase'
  }
];

const Home: React.FC = () => {
  return (
    <div>
      <section>
        <Carousel slides={carouselSlides} />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Welcome to Design Thinking Club</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a community of innovators, creators, and problem-solvers dedicated to using design thinking
              principles to tackle complex challenges. Our club provides a platform for students to learn, 
              collaborate, and develop creative solutions.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.link} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="mb-4">{link.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Club?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become a part of our creative community and start your journey in design thinking today.
          </p>
          <Link 
            to="/join-us" 
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;