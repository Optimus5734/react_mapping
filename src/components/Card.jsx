import React from "react";

function Card(data) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {data.emoji}
        </span>
        <span>{data.name}</span>
      </dt>
      <dd>{data.meaning}</dd>
    </div>
  );
}
export default Card;
