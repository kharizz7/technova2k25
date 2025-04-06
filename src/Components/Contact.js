import React from "react";

const Contact = () => {
  const facultyCoordinators = [
    { name: "Dr. Anil Kumar", position: "Professor, CSE Dept.", phone: "+91-9876543210" },
    { name: "Dr. Priya Sharma", position: "Associate Professor, IT Dept.", phone: "+91-8765432109" },
  ];

  const studentCoordinators = [
    { name: "Aarav Mehta", position: "Final Year, CSE", phone: "+91-7654321098" },
    { name: "Ishita Raj", position: "Third Year, IT", phone: "+91-6543210987" },
  ];

  return (
    <div id="contact" className="bg-black rounded-2xl shadow-lg p-6 m-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Contact Us</h2>

      {/* Faculty Coordinators */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-200">Faculty Coordinators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facultyCoordinators.map((coordinator, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
              <p className="font-medium text-gray-100 text-lg">{coordinator.name}</p>
              <p className="text-gray-200">{coordinator.position}</p>
              <p className="text-gray-200">{coordinator.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Coordinators */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-200">Student Coordinators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {studentCoordinators.map((coordinator, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
              <p className="font-medium text-gray-100 text-lg">{coordinator.name}</p>
              <p className="text-gray-200">{coordinator.position}</p>
              <p className="text-gray-200">{coordinator.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
