import Post from './posts';
import './App.css'
import { Suspense } from 'react';
import Players from './players';
import Count from './count';

// const post = async()=>
// {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json();
// }
function App() {
  // const post1 = post();
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<p>Post is loading............................</p>}>
      <Post post={post1}></Post>
      </Suspense> */}
      {/* <Players></Players>
      */}
      <Count></Count>
    </>
  )
}

export default App;
