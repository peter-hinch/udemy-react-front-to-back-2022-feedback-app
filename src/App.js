import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text="Hello World"/>
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App;