import React from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    { title: "Paper Presentation", description: "Showcase your research and innovative ideas." },
    { title: "Code Debug", description: "Test your debugging skills and solve coding challenges." },
    { title: "Web Design", description: "Design and present creative web solutions." },
    { title: "IPL Auction", description: "Experience the thrill of an IPL-style bidding competition." },
    { title: "Component Identification", description: "Identify and explain various technical components." },
    { title: "Tech Sketch", description: "Illustrate your technical ideas and bring them to life." },
  ];

  const cardColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  // Navigate to the /register route
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section id="event" className="py-12 px-4 bg-black text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-md overflow-hidden group ${cardColors[index % cardColors.length]}`}
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-neon-border"></div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-white">{event.title}</h3>
              <p className="text-lg relative z-10 mb-4 text-white">{event.description}</p>
              <div className="flex justify-between mt-4 relative z-10">
                {/* Register Button (Navigates to /register) */}
                <button
                  onClick={handleRegisterClick}
                  className="bg-gradient-to-r from-red-500 to-red-700 bg-opacity-30 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg hover:from-red-600 hover:to-red-800 hover:bg-opacity-40 shadow-xl backdrop-blur-lg transition duration-300 w-auto"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Register Now
                </button>

                {/* View More Button */}
                <button
                  className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-opacity-30 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg hover:from-teal-500 hover:to-cyan-600 hover:bg-opacity-40 shadow-xl backdrop-blur-lg transition duration-300 w-auto"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neon Border Animation */}
      <style>{`
        @keyframes neon-border {
          0% { border-color: #ff00ff; }
          33% { border-color: #00ffff; }
          66% { border-color: #ffff00; }
          100% { border-color: #ff00ff; }
        }
        .animate-neon-border {
          animation: neon-border 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Events;
