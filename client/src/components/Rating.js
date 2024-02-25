import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  const stars = Array.from(Array(5).keys(), (v) => Number(v + 1));

  return (
    <>
      {stars.map((star) => (
        <span key={star}>
          {value >= star ? (
            <FaStar />
          ) : value >= star - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
