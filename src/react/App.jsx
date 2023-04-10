"use client";

import { Suspense, use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

const reactFetch = () => createFromFetch(fetch("/rsc"));
const serverElementPromise = reactFetch();

export const App = () => {
  return (
    <>
      <div>Hello World!</div>

      <Suspense fallback="Loading RSC...">
        <Wrapper />
      </Suspense>
    </>
  );
};

const Wrapper = () => use(serverElementPromise);
