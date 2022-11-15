import React from "react";
import { RatingStar } from "rating-star";

export default function Star() {
  const [rating, setRating] = React.useState(3.5);

  const onRatingChange = (score) => {
    setRating(score);
  };

  return (
    <div className="App">
      {/* <h1>  </h1> */}
      <RatingStar
        clickable
        maxScore={5}
        id="123"
        rating={rating}
        onRatingChange={onRatingChange}
      />
    </div>
  );
}