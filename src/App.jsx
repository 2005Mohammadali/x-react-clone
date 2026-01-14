import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './Sidebar' 
import { Feed } from './Feed'
import { Widgets } from './Widgets'

function App() {

  return (
    <div className='w-full bg-black text-white flex relative'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}

export default App
