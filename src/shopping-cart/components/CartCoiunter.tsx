'use client';

import { useState } from 'react';

interface CartCoiunterProps {
  value?: number;
}

export const CartCoiunter = ({ value = 0 }: CartCoiunterProps) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span className="text-9xl font-bold"> {count}</span>
      <div className="flex gap-4">
        <button
          onClick={handleSubtract}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          -1
        </button>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          +1
        </button>
      </div>
    </>
  );
};
