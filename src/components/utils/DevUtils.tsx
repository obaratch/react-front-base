import React from "react";

const EN = () => {
  return (
    <p className="dev-utils lorem-ipsum en">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit
      sunt rerum molestias sequi laborum ducimus laboriosam, ullam libero
      voluptas exercitationem quasi suscipit dignissimos impedit quae dicta
      delectus ad et.
    </p>
  );
};
const JA = () => {
  return (
    <p className="dev-utils lorem-ipsum ja">
      あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
    </p>
  );
};

export const LoremIpsum = { EN, JA };
