import {AiFillStar, AiOutlineStar} from "react-icons/ai"

export const Rate = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {rating > index ? (
            <div style={{color:'yellow'}}><AiFillStar /></div>
          ) : (
           <div><AiOutlineStar /></div>
          )}
        </span>
      ))}
    </>
  );
};
