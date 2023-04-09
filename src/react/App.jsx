import { useRef, use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

const reactFetch = () => createFromFetch(fetch("/rsc"));

export const App = () => {
  const contentRef = useRef(reactFetch());
  const serverElement = use(contentRef.current);

  return (
    <>
      <div>Hello World!</div>

      {serverElement}
    </>
  );
};
