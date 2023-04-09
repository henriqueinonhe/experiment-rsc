"use client";

import { use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

const reactFetch = () => createFromFetch(fetch("/rsc"));
const serverElementPromise = reactFetch();

export const App = () => {
  const serverElement = use(serverElementPromise);

  return (
    <>
      <div>Hello World!</div>

      {serverElement}
    </>
  );
};
