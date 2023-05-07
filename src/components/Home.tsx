import React from "react";

import { LoremIpsum } from "./utils/DevUtils";

export const Home = () => {
  return (
    <div className="main home">
      <h1>
        Hello Vite! <i className="fab fa-font-awesome-flag" />
      </h1>
      <div className="dummy text">
        <LoremIpsum.EN />
        <LoremIpsum.EN />
        <LoremIpsum.JA />
        <LoremIpsum.JA />
      </div>
    </div>
  );
};
