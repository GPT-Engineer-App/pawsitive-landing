import { useState } from 'react';
import { Dog, Heart, Bone, Home } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const dogBreeds = [
    { name: 'Labrador Retriever', trait: 'Friendly and outgoing' },
    { name: 'German Shepherd', trait: 'Intelligent and versatile' },
    { name: 'Golden Retriever', trait: 'Gentle and affectionate' },
    { name: 'Bulldog', trait: 'Calm and courageous' },
    { name: 'Beagle', trait: 'Merry and curious' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Dog className="mr-2" /> Pawsome Dogs
          </h1>
        </div>
      </header>

      <nav className="bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 py-2">
            {['about', 'breeds', 'care'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-1 rounded ${
                    activeSection === section ? 'bg-blue-700' : 'hover:bg-blue-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'about' && (
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Heart className="mr-2" /> Why Dogs Make Great Pets
            </h2>
            <p className="text-lg mb-4">
              Dogs are known as man's best friend for good reason. They offer unconditional love,
              loyalty, and companionship. Here are some reasons why dogs make excellent pets:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Provide emotional support and reduce stress</li>
              <li>Encourage an active lifestyle through walks and play</li>
              <li>Offer protection and a sense of security</li>
              <li>Teach responsibility, especially for children</li>
              <li>Improve social interactions and connections</li>
            </ul>
          </section>
        )}

        {activeSection === 'breeds' && (
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Bone className="mr-2" /> Popular Dog Breeds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dogBreeds.map((breed) => (
                <div key={breed.name} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
                  <p>{breed.trait}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'care' && (
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Home className="mr-2" /> Basic Dog Care Tips
            </h2>
            <ul className="list-disc list-inside">
              <li>Provide a nutritious diet appropriate for their age and size</li>
              <li>Ensure access to fresh water at all times</li>
              <li>Regular exercise through walks and playtime</li>
              <li>Routine veterinary check-ups and vaccinations</li>
              <li>Grooming, including brushing and bathing as needed</li>
              <li>Training and socialization from an early age</li>
              <li>Lots of love and attention!</li>
            </ul>
          </section>
        )}
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Pawsome Dogs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
