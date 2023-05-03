import React, { useContext, useState } from 'react'
import AuthContext from '../context/auth-context';
import AnimatedButton from './UIElements/animated-button';

function Header(props) {
    const auth = useContext(AuthContext)
    const [className,setClassName] = useState('');

    const toggleButton = () => {
        if(className === "on"){
            setClassName('');
        }
        else{
            setClassName("on");
        }
    }
    
  return (
    <nav>
    <ul>
   
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a
          onClick={() => {
            auth.logout();
          }}
          href="/auth"
        >
          logout
        </a>
      </li>
      <li onClick ={() =>{
            toggleButton()
            props.onClick()
          }}
           className='hum'>
          
          <AnimatedButton className={className}/>
          
      </li>
    </ul>
  </nav>
  )
}

export default Header