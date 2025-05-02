import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationLink?: string;
  past?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Smart Campus Hackathon - SCH 2025',
    date: 'May 10, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Anna Hall',
    description: 'Join fellow innovators in solving real campus challenges using tech in this all-day Smart Campus Hackathon.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeyVXm1aQ3k_ZR_Di88HZ6Uu8jyoTq3i4F33NHauE-Mh9_1kg/viewform?usp=dialog'
  }
  
];

const pastEvents: Event[] = [
  {
    id: 2,
    title: 'Hands-on Project: Powered Python',
    date: 'March 25, 2025',
    time: '10:00 AM - 12:30 PM',
    location: 'AI Lab, Library Block',
    description: 'Get hands-on experience building real-world applications using Python in this interactive project session.',
    image: 'event1.jpeg',
    past: true
  },
  {
    id: 3,
    title: 'The Mic is Yours',
    date: 'April 12, 2025',
    time: '1:30 PM - 4:00 PM',
    location: 'Anna Hall',
    description: 'An open stage event for sharing stories, ideas, and innovation journeys — your mic, your voice.',
    image: 'https://images.pexels.com/photos/4652276/pexels-photo-4652276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    past: true
  }
];


const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          {event.description}
        </p>
        {event.registrationLink && !event.past && (
          <a 
            href={event.registrationLink} 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Register
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        )}
        {event.past && (
          <span className="inline-block bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md">
            Past Event
          </span>
        )}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for workshops, seminars, and other exciting events to enhance your design thinking skills.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Host an Event?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            If you have an idea for an event related to design thinking or innovation, we'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;