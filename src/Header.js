import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa"

const Header = () => {
  
     const  [items, setName] = useState([{
      id:1,
      checked: true,
      item : "Playing Euro Truck"
     },
     {
      id:2,
      checked: true,
      item : "Playing GTA 5"
     },
     {
      id:3,
      checked: false,
      item : "Playing NFS"
     },
     {
      id:4,
      checked: false,
      item : "Playing Rally Racing"
     }
     ]);

  return (
   <main>
      <p>Header Contains 
         Navbar Logo
      </p>
   </main>
  )
}

export default Header