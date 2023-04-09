"use client";

import { useState } from "react";

export const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};
