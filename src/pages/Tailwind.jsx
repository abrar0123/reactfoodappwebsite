import React from "react";

export default function Tailwind() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS 1!</h1>
      <h1 className="text-2xl font-bold text-center text-blue-500">
        Hello, Tailwind CSS 1!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-red font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
}
