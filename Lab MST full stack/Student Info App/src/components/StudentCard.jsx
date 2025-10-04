import React from "react";

function StudentCard({ name, roll, course }) {
  // Get initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Card Header */}
      <div className="bg-blue-600 text-white font-bold text-lg py-2 rounded-t-xl">
        Student ID Card
      </div>

      {/* Avatar */}
      <div className="my-6">
        <div className="w-24 h-24 rounded-full mx-auto bg-blue-200 flex items-center justify-center text-2xl font-bold text-white shadow-md">
          {initials}
        </div>
      </div>

      {/* Student Info */}
      <p className="font-semibold text-gray-700">{name}</p>
      <p className="text-gray-700">Roll No: {roll}</p>
      <p className="text-gray-700">Course: {course}</p>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-500 font-medium">
        University of Learning
      </div>
    </div>
  );
}

export default StudentCard;
