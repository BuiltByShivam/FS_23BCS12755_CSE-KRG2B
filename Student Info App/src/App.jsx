import React from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    { name: "Shivam Tiwari", roll: "101", course: "CSE" },
    { name: "Aman Verma", roll: "102", course: "ECE" },
    { name: "Priya Sharma", roll: "103", course: "IT" },
    { name: "Rohan Gupta", roll: "104", course: "ME" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-200 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 drop-shadow">
        Student Info Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            roll={student.roll}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
