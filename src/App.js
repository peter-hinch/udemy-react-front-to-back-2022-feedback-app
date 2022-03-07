import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header text="Hello World"/>
      <div className="container">
        <FeedbackItem />  
      </div>
    </>
  )
}

export default App;