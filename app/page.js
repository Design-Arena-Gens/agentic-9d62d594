'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const houses = [
    {
      id: 1,
      name: "Traditional Nubian House",
      region: "Northern Sudan",
      type: "Traditional",
      description: "Nubian houses are characterized by their distinctive domed roofs and colorful decorative patterns. Built with mud brick and clay, these houses are designed to stay cool in the extreme desert heat. The thick walls provide excellent insulation, and the small windows minimize heat entry while allowing for ventilation.",
      features: [
        "Domed roofs for natural cooling",
        "Mud brick construction with clay plaster",
        "Vibrant geometric patterns and colors",
        "Thick walls (up to 60cm) for insulation",
        "Courtyards for family gatherings",
        "Small windows to reduce heat"
      ],
      color: "#D2691E"
    },
    {
      id: 2,
      name: "Tukul (Round Hut)",
      region: "Central & Southern Sudan",
      type: "Traditional",
      description: "The Tukul is a traditional round hut with a conical thatched roof, commonly found in rural areas. Built with locally sourced materials like grass, wood, and mud, these structures are perfectly adapted to the climate. The circular design provides structural strength against wind and distributes interior temperature evenly.",
      features: [
        "Circular structure with conical roof",
        "Thatched roof using local grass",
        "Wooden pole framework",
        "Mud and wattle walls",
        "Elevated floor to prevent flooding",
        "Central pole supporting the roof"
      ],
      color: "#8B4513"
    },
    {
      id: 3,
      name: "Khartoum Modern Villa",
      region: "Khartoum (Capital)",
      type: "Modern",
      description: "Modern villas in Khartoum blend contemporary architecture with local climate considerations. These multi-story homes feature reinforced concrete construction, large windows with sun shades, and often include gardens and high walls for privacy. Air conditioning and modern amenities are standard in these urban residences.",
      features: [
        "Reinforced concrete construction",
        "2-3 story structures",
        "Large windows with sun shades",
        "Tiled or marble floors",
        "Garden courtyards",
        "High boundary walls for privacy",
        "Modern plumbing and electricity"
      ],
      color: "#4682B4"
    },
    {
      id: 4,
      name: "Darfur Stone House",
      region: "Western Sudan (Darfur)",
      type: "Traditional",
      description: "In the mountainous regions of Darfur, houses are often built with stone foundations and mud brick walls. These structures feature flat or slightly sloped roofs and are built to withstand both hot days and cool nights. The stone construction provides durability against erosion during the rainy season.",
      features: [
        "Stone foundation for stability",
        "Mud brick upper walls",
        "Flat or low-sloped roofs",
        "Small ventilation openings",
        "Storage rooms for grain",
        "Enclosed courtyards for livestock"
      ],
      color: "#A0522D"
    },
    {
      id: 5,
      name: "Port Sudan Coastal House",
      region: "Red Sea Coast",
      type: "Mixed",
      description: "Houses in Port Sudan reflect both traditional and colonial influences. These structures are designed to catch sea breezes with large verandas and high ceilings. The architecture shows influences from Ottoman, Egyptian, and British colonial periods, creating a unique coastal style.",
      features: [
        "Wide verandas for shade",
        "High ceilings for air circulation",
        "Large windows facing the sea",
        "Mashrabiya (latticed) screens",
        "Coral stone or concrete block walls",
        "Painted in light colors to reflect heat"
      ],
      color: "#20B2AA"
    },
    {
      id: 6,
      name: "Omdurman Traditional Compound",
      region: "Omdurman",
      type: "Traditional",
      description: "Traditional compounds in Omdurman consist of multiple rooms arranged around a central courtyard. These family compounds (hoash) are built with mud brick and feature separate rooms for different functions. The courtyard serves as the heart of family life and social activities.",
      features: [
        "Multiple rooms around courtyard",
        "Shared outdoor cooking areas",
        "Separate guest quarters",
        "Mud brick with whitewash",
        "Wooden doors with decorative patterns",
        "Flat roofs used for sleeping in summer"
      ],
      color: "#CD853F"
    }
  ];

  const regions = [
    {
      name: "Northern Sudan",
      climate: "Hot desert climate",
      materials: "Mud brick, clay, palm wood"
    },
    {
      name: "Central Sudan",
      climate: "Semi-arid with seasonal rains",
      materials: "Mud brick, concrete, wood"
    },
    {
      name: "Western Sudan",
      climate: "Semi-arid to arid",
      materials: "Stone, mud brick, thatch"
    },
    {
      name: "Eastern Sudan",
      climate: "Hot with coastal influences",
      materials: "Coral stone, concrete, wood"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderBottom: '4px solid #D2691E'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2.5rem',
          color: '#2c3e50',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          🏠 Houses in Sudan
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#555',
          fontSize: '1.1rem',
          margin: '0.5rem 0 0 0'
        }}>
          Exploring Traditional & Modern Architecture
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>

        {/* Introduction */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Architecture of Sudan</h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.1rem' }}>
            Sudanese architecture reflects the country's diverse geography, climate, and cultural heritage.
            From the ancient Nubian domed houses in the north to the traditional round tukuls in the south,
            and modern concrete villas in Khartoum, Sudan's housing showcases centuries of adaptation to
            one of Africa's most varied landscapes. Traditional building techniques emphasize natural cooling,
            locally sourced materials, and designs that foster community living.
          </p>
        </section>

        {/* Regional Climate Info */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Regional Characteristics</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {regions.map((region, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                background: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{region.name}</h3>
                <p style={{ margin: '0.5rem 0', color: '#666' }}>
                  <strong>Climate:</strong> {region.climate}
                </p>
                <p style={{ margin: '0.5rem 0', color: '#666' }}>
                  <strong>Materials:</strong> {region.materials}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* House Types Grid */}
        <section>
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
            Types of Houses in Sudan
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {houses.map((house) => (
              <div
                key={house.id}
                onClick={() => setSelectedHouse(house)}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  transform: selectedHouse?.id === house.id ? 'scale(1.02)' : 'scale(1)',
                  border: selectedHouse?.id === house.id ? '3px solid #667eea' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (selectedHouse?.id !== house.id) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedHouse?.id !== house.id) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                  }
                }}
              >
                {/* Visual Header */}
                <div style={{
                  height: '160px',
                  background: `linear-gradient(135deg, ${house.color} 0%, ${house.color}dd 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative'
                }}>
                  {house.type === 'Traditional' ? '🏛️' : house.type === 'Modern' ? '🏢' : '🏘️'}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: house.color
                  }}>
                    {house.type}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#2c3e50',
                    fontSize: '1.4rem'
                  }}>
                    {house.name}
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontSize: '0.9rem',
                    margin: '0 0 1rem 0',
                    fontWeight: '600'
                  }}>
                    📍 {house.region}
                  </p>
                  <p style={{
                    color: '#555',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {house.description.substring(0, 120)}...
                  </p>
                  <button
                    style={{
                      marginTop: '1rem',
                      padding: '0.6rem 1.2rem',
                      background: house.color,
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Modal */}
        {selectedHouse && (
          <div
            onClick={() => setSelectedHouse(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white',
                borderRadius: '16px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            >
              {/* Modal Header */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${selectedHouse.color} 0%, ${selectedHouse.color}dd 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative'
              }}>
                <button
                  onClick={() => setSelectedHouse(null)}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255,255,255,0.3)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  ×
                </button>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {selectedHouse.type === 'Traditional' ? '🏛️' : selectedHouse.type === 'Modern' ? '🏢' : '🏘️'}
                </div>
                <h2 style={{ margin: 0, fontSize: '2rem' }}>{selectedHouse.name}</h2>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.1rem', opacity: 0.9 }}>
                  📍 {selectedHouse.region}
                </p>
              </div>

              {/* Modal Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${selectedHouse.color}`,
                  marginBottom: '1.5rem'
                }}>
                  <strong style={{ color: selectedHouse.color }}>Type:</strong> {selectedHouse.type}
                </div>

                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Description</h3>
                <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                  {selectedHouse.description}
                </p>

                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Key Features</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gap: '0.8rem'
                }}>
                  {selectedHouse.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '0.8rem 1rem',
                        background: '#f8f9fa',
                        borderRadius: '6px',
                        color: '#555',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        background: selectedHouse.color,
                        borderRadius: '50%',
                        marginRight: '1rem'
                      }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <section style={{
          marginTop: '3rem',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Building Traditions</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Sudanese architecture has evolved over thousands of years, influenced by ancient Nubian, Arab,
            Ottoman, and British colonial styles. Traditional building methods prioritize sustainability,
            using locally available materials and passive cooling techniques essential in Sudan's hot climate.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555', margin: 0 }}>
            Modern urbanization has introduced concrete and steel construction, particularly in cities like
            Khartoum, but many rural communities continue to build using traditional methods that have proven
            effective for centuries. The challenge today is balancing modernization with preservation of
            cultural architectural heritage.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(44, 62, 80, 0.95)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          Sudanese Architecture Exhibition • Showcasing Traditional & Modern Housing
        </p>
      </footer>
    </div>
  );
}
