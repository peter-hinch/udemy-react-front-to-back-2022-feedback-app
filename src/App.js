function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>

  const commentBlock = (
    <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
  )

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {/* In a conditional when && is preceded by a boolean will evaluate the */}
      {/* code given as the second argument only if the boolean is true - this */}
      {/* can be used for conditional rendering of items in JSX. */}
      {showComments && commentBlock}
    </div>
  )
}

export default App;