import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Hero from './assets/components/Hero'
import { Routes, Route } from 'react-router-dom'
import Info from './assets/components/Info'
import Nav from './assets/components/Nav'
import Fotter from './assets/components/Fotter'
function App() {
  const [count, setCount] = useState([])
  const [error, setError] = useState(false)
  
  // useEffect(() => {
  //   ( async()=>{
  //     try {
       
  //      const responce = await axios.get('https://api.jikan.moe/v4/top/anime?sfw')
  //     setCount(responce.data.data)
  //     setError(false)
  //     console.log(responce.data.data)
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError(true);
  //     }
     
      
  //   })()
  // }, [])
  return (
    //* condition1 ? doSomething1(): condition2 ? doSomething2(): doSomething3();

    <>
  <Nav />
  {/* {
  error ? (
    <h1>Something went wrong</h1>
  ) : count.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    count.map((item) => (
      <div key={item.mal_id}>
        <h2>{item.title}</h2>
        <img src={item.images.jpg.image_url} alt={item.title} />
      </div>
    ))
  )
} */}
  <Routes>
    
      <Route path="/" element={<Hero />} />
      <Route path="/info" element={<Info />} />
    </Routes>
    <Fotter/>
    </>
  )
}

export default App
