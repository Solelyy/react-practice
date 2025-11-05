import { useState } from "react";

function LikeCard({ name, motto, age }) {
  const [isLiked, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!isLiked);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>Motto: {motto}</p>
      <p>{isLiked ? "❤️" : "🤍"}</p>
      <button onClick={toggleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeCard;
