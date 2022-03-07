import { useState } from "react"

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  
  const handleChange = (event) => {
    let eventVal = +event.currentTarget.value; // '+' converts string to number
    setSelected(eventVal); 
    select(eventVal);
  }

  return (
    <ul className="rating">
      {/* Use Array.from() to generate 10 radio buttons */}
      {/* Reference: https://github.com/bradtraversy/feedback-app/blob/main/src/components/RatingSelect.jsx */}
      {/* Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from */}
      {Array.from({length: 10}, (v, i) => (
        <li>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect