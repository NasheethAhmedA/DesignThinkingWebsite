import React from 'react';
import { AvatarImage } from '../../images';

const Batch2026: React.FC = () => {
    const teamMembers = [
        {
            name: 'Divya Elumalai',
            role: 'Club President',
            image: AvatarImage
        },
        {
            name: 'Nasheeth Ahmed',
            role: 'Vice President',
            image: AvatarImage
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

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h2 id="Batch2026" className="text-3xl font-bold text-center mb-12">Batch 2026 Coordinators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb4 relative overflow-hidden rounded-lg">
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
        </div>
    );
};

export default Batch2026;
