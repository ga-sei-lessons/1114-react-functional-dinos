import logo from './logo.svg';
import './App.css';
import Post from './Post'


// starter array of posts
const starterPosts = [
  {    
    title: 'Scientists make a great snack!',
    author: 'Trex from Jurassic park',
    body: 'They are crunchy, delicious and healthy for the dino trying to watch their weight',
    comments: [
      'True!',
      'I love Scientists for breakfast and lunch!',
      'Great Post!',
      'I like anthropologists in particular to eat'
    ]
  },
  {
    title: 'Dinosaurs are neat',
    author: 'Mr. T-Rex',
    body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
    comments: [
      'Wow!',
      'Amazing!',
      '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
    ]
  }
]

// define a function
function App() {


  // here is where we render arrays of components
  const posts = starterPosts.map((post, idx) => {
    return (
      <Post 
        key={`post${idx}`}
        title={post.title}
        body={post.body}
        author={post.author}
        comments={post.comments}
      />
    )
  })

  // no render method, just return from the main function body
  return (
    <div>
      {posts}
    </div>
  )

}

// export that function below
export default App;
