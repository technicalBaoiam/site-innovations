import React, { useEffect, useRef } from "react";
import { FaAward } from "react-icons/fa";
import { gsap } from "gsap";

function Achievements() {
  const achievements = [
    { id: 1, name: "No Certifications Earned by far" },
    // { id: 2, name: 'React Badge' },
    // Uncomment the below line to simulate no certificates
    // achievements = []
  ];

  const listRef = useRef(null);

  useEffect(() => {
    if (achievements.length > 0) {
      // GSAP animation for the list items
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
      );
    }
  }, [achievements]);

  return (
    <div className="h-screen w-full px-4 py-12">
      <div className="bg-indigo-600 p-4 rounded-lg shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Achievements</h2>
        {achievements.length > 0 ? (
          <ul ref={listRef}>
            {achievements.map((achievement) => (
              <li
                key={achievement.id}
                className="mb-4 flex items-center space-x-2 p-3 bg-white bg-opacity-10 rounded-lg shadow-sm"
              >
                <FaAward className="text-yellow-400" />
                <span>{achievement.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-lg font-semibold p-6 bg-white bg-opacity-10 rounded-lg">
            <p>No certificates earned yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Achievements;
