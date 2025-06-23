import React from 'react';
import { PlusCircle } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Showcase: React.FC = () => {
    // const completedProjects = [
    //     { id: 1, title: 'Project Alpha', description: 'A completed project about AI solutions.' },
    //     { id: 2, title: 'Project Beta', description: 'A completed project about web development.' },
    // ];

    const ongoingProjects = [
    { id: 1, title: 'AI Shadow Assistant', description: 'An AI-powered holographic assistant for accident detection and emergency alert systems.' },
    { id: 2, title: 'Smart Plant Watering System', description: 'An automated irrigation system that monitors soil moisture to efficiently water plants.' },
    { id: 3, title: 'Digital Healthcare Consulting Platform', description: 'A digital platform providing healthcare consultations and remote medical support.' },
    { id: 4, title: 'Voice-Based Email Assistance', description: 'A system enabling users to send and manage emails using voice commands.' },
    { id: 5, title: 'Home Automation Using Arduino', description: 'A home automation solution built with Arduino to control appliances remotely.' }
];


    return (
        <div>
            <section className="py-20 bg-blue-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6" id='ShowCase'>Showcase</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Explore our ongoing projects, and start your own journey with us.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        {/* Uncomment the following section if you want to display completed projects */}
                        {/* <h2 className="text-3xl font-bold mb-8 text-center">Completed Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {completedProjects.map((project) => (
                                <div key={project.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            ))}
                        </div> */}

                        <h2 className="text-3xl font-bold mb-8 text-center">Ongoing Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {ongoingProjects.map((project) => (
                                <div key={project.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Start a New Project</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8">
                        Ready to bring your ideas to life? Start your project with us today.
                    </p>
                    <div className="flex justify-center">
                        <HashLink
                            to="/contact#SendMSG"
                            smooth
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Start a Project
                        </HashLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Showcase;
