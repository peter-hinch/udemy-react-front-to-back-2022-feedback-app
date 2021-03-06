import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // Import the addFeedback function and feedbackEditItem object from FeedbackContext.
  const { addFeedback, feedbackEditItem, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditItem.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEditItem.item.text);
      setRating(feedbackEditItem.item.rating);
    }
  }, [feedbackEditItem]);

  // Validate form:
  // - Disable button for less than 10 characters.
  // - Display a mesage for feedback that is shorter than 10 characters long.
  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text, rating };

      if (feedbackEditItem.edit === true) {
        updateFeedback(feedbackEditItem.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
