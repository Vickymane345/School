import React, {useState} from 'react'
import Home from './Components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
      const [SideBarMenu, setSideBarMenu] = useState(false) 
  const toggleSideBarMenu = () =>{
    SideBarMenu ? setSideBarMenu(false) : setSideBarMenu(true)
  }
    return (
    <> 
    <Navbar SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu}/>
    <Home/>
    </>
)
}

export default App
