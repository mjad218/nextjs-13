"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Rating.module.css";
const ratingMap = (stars) => {
  const ratingMap = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      ratingMap.push(1);
      continue;
    }
    if (Math.abs(i - stars) < 1) {
      ratingMap.push(1 - Math.abs(i - stars));
      continue;
    }
    if (Math.abs(i - stars) >= 1) {
      ratingMap.push(0);
      continue;
    }
  }
  return ratingMap;
};

type IProps = {
  stars: number;
  setStars?: (stars: number) => void;
};
const Rating: FC<IProps> = (props) => {
  const stars: number = props.stars ? props.stars : 0;
  const setStars = props.setStars;
  const [mapOfStars, setMapOfStars] = useState([]);
  const handleClick = (i) => {
    if (!setStars) {
      return;
    }
    setStars(i + 1);
  };
  useEffect(() => {
    const map = ratingMap(stars);

    setMapOfStars(map);
  }, [stars]);
  return (
    <span className={styles.rating}>
      {mapOfStars?.map((star, i) => (
        <svg
          key={i}
          onClick={() => handleClick(i)}
          fill={star === 1 ? "#ff9529" : "#eee"}
          xmlns="http://www.w3.org/2000/svg"
          width="940.688"
          height="940.688"
          x="0"
          y="0"
          enableBackground="new 0 0 940.688 940.688"
          version="1.1"
          viewBox="0 0 940.688 940.688"
          xmlSpace="preserve"
        >
          <defs>
            <linearGradient id={"half" + i}>
              <stop
                offset={star > 0 ? (star === 1 ? 0 : Math.abs(1 - star)) : 1}
                stopColor="#eee"
                stopOpacity="1"
              />

              <stop offset="0" stopColor="#ff9529" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            // fill={"url(#half" + i + ")"}
            d="M885.344 319.071l-258-3.8-102.7-264.399c-19.8-48.801-88.899-48.801-108.6 0l-102.7 264.399-258 3.8c-53.4 3.101-75.1 70.2-33.7 103.9l209.2 181.4-71.3 247.7c-14 50.899 41.1 92.899 86.5 65.899l224.3-122.7 224.3 122.601c45.4 27 100.5-15 86.5-65.9l-71.3-247.7 209.2-181.399c41.399-33.7 19.7-100.801-33.7-103.801z"
          ></path>
        </svg>
      ))}
    </span>
  );
};
export default Rating;
