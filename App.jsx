import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Newsboard from './components/Newsboard'
import NewsItem from './components/Newsitem'


const App=()=> {
 
  const [category,setCategory]=useState("general");

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  )
}

export default App;
