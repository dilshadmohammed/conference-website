import React from 'react';
import keynoteSpeakers from '../content/keynoteSpeakers.json'; // Adjust the path to where your JSON file is stored

const SpeakerCard: React.FC<{ name: string, title: string, location: string, imageUrl: string }> = ({ name, title, location, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-80 mx-auto">
      <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-full mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-600 text-center mb-2">{title}</p>
      {location && <p className="text-gray-400 text-center">{location}</p>}
    </div>
  );
};

const Speakers: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 lg:px-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Keynote Speakers</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {keynoteSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.title}
              location={speaker.location}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
