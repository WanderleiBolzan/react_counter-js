import { useState } from 'react';
// Assuming App.scss is handled by the build system and correctly applies styles.

export default function App() {
  const [count, setCount] = useState(0); // State for the counter

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100();
      addOne();
    }
  };

  return (
    <div
      className="flex flex-col items-center
      justify-center min-h-screen
      bg-gray-100 font-sans p-4"
    >
      <h1
        className="text-4xl font-bold
        text-gray-800 mb-8
        rounded-lg p-4 bg-white
        shadow-md"
      >
        Count: {count}
      </h1>

      <div
        className="flex flex-col
        space-y-4 md:flex-row md:space-y-0 md:space-x-4"
      >
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700
            text-white font-bold py-3
            px-6 rounded-lg shadow-md
            transition duration-300
            ease-in-out transform
            hover:scale-105"
          onClick={addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="bg-green-500
            hover:bg-green-700
            text-white font-bold
            py-3 px-6 rounded-lg
            shadow-md transition duration-300
            ease-in-out transform
            hover:scale-105"
          onClick={add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="bg-purple-500
            hover:bg-purple-700
            text-white font-bold
            py-3 px-6 rounded-lg
            shadow-md transition duration-300
            ease-in-out transform
            hover:scale-105"
          onClick={increase}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
