import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/Data'
function App() {
  const DataElement=data.map((el) => <Card  
                                          key={el.id}
                                          {...el}                                
                                      />)
  return (
    <div className="root-div">
      <Navbar />
      <hr/>
      <Hero/>
      <div className="card-layout">
        {DataElement}
      </div>
    </div>
  )
}

export default App
