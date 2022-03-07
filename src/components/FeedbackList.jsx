import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className="feedbacl-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}  
    </div>
  )
}

export default FeedbackList
