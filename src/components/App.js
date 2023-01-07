import React, { useState ,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from '../actions';
import '../styles/App.css';

const LoginButton = () => {
  const dispatch = useDispatch();
  const inpRef = useRef();
  return <div>
    <input id="username" ref={inpRef}></input>
    <button id="login-button" onClick={()=>dispatch(loginAction(inpRef.current.value))}>Login</button>
  </div>
}

const LogoutButton = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  return <div>
    <span id="user">Hello {username}</span>
    <button id="logout-button" onClick={()=>dispatch(logoutAction())}>logout</button>
  </div>
}

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div id="main">
      {loggedIn
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  )
}


export default App;
