import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa"

const Content = () => {
  
     const  [items] = useState([{
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
    <ul>
       {items.map( (item) => (<li>
        <input type='checkbox' checked={item.checked}/>
        <label>{item.item}</label>
        <FaTrashAlt 
        role="button"
        tabIndex='0'
        />
       </li>))}
    </ul>
   </main>
  )
}

export default Content