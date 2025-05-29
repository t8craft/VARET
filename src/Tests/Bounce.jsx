import React, { useState } from 'react';

const Bounce = () => {
  const [bouncing, setBouncing] = useState(false);

  const handleClick = () => {
    setBouncing(true);
    setTimeout(() => setBouncing(false), 500); // reset after 0.5s
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        onClick={handleClick}
        className={`bg-red-200 px-6 py-3 rounded-md shadow-md text-black cursor-pointer transition-transform ${
          bouncing ? 'bounce-right' : ''
        }`}
      >
        Test Bounce
      </div>
    </div>
  );
};

export default Bounce;
