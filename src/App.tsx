import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/layout'
import HomePage from './pages/HomePage'
import {  useState } from 'react';
import { Theme, ThemeContext, } from './constants/store';

function App() {
  
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || 'light' as Theme)

  return (
    <>
    
    <ThemeContext.Provider value={{theme, setTheme}}>    
    <BrowserRouter>
    
    <div className={`${theme==='dark' && 'theme-dark' || theme === 'light' && 'theme-light'} bg-skin-1 text-skin-1`} >
     
    
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>

        </Route>
      </Routes>
      
    </div>
    </BrowserRouter>
    </ThemeContext.Provider>
    </>
  )
}

export default App
