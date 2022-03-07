import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  // Return statement prior to adding animation.
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete} />
  //     ))}  
  //   </div>

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  // The required structure for an array can also be defined in PropTypes.
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList
