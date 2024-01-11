import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarRating({ maxRating = 5, onRating }) {
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  const stars = Array.from({ length: maxRating })

  const handleRating = index => {
    setRating(index + 1)
    onRating(index + 1);
  }
  const handleMouseIn = index => setTempRating(index + 1)
  const handleMouseLeave = () => setTempRating(rating)

  return (
    <div className="flex items-center gap-3">
      <ul className="flex items-center w-20 h-10">
        {stars.map((_, i) => {
          const isActiveStar = rating > i ? "#FFD500" : '#696969'
          const isTempActiveStar = tempRating > i ? "#FFD500" : '#696969'

          return (
            <li 
              key={i} 
              onClick={() => handleRating(i)} 
              onMouseEnter={() => handleMouseIn(i)}
              onMouseLeave={handleMouseLeave}
              className="px-[0.5px] hover:cursor-pointer"
            >
              <FaStar color={isTempActiveStar || isActiveStar} />
              <input type="number" name="rating" className="sr-only" defaultValue={rating} />
            </li>
          )
        })}
      </ul>
      <p>{tempRating || rating || ''}</p>
    </div>
  )
}