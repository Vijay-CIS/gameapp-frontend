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
      item : "Playing GTA %"
     },
     {
      id:3,
      checked: true,
      item : "Playing NFS"
     },
     {
      id:4,
      checked: true,
      item : "Playing Rally Racing"
     }
     ]);

  return (
   <main>
    <ul>
       {items.map( (item) => (<li>
        <input type='checkbox' checked={item.checked}/>
        <label>{item.item}</label>
        <FaTrashAlt/>
       </li>))}
    </ul>
   </main>
  )
}

export default Header