import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
//axios replaces fetch //did this for Ellie
import axios from 'axios';

function App() {
  //inputs onChange event update the set field
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const[data, setData] = useState("");

  const register = () => {
      axios({
          method: "POST",
          data: {
              username: registerUsername,
              password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:3001/register",
      }).then((res) => console.log(res));
  };
  const login = () => {
      axios({
          method: "POST",
          data: {
              username: loginUsername,
              password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:3001/login",
      }).then((res) => console.log(res.data));
  };
  const getUser = () => {
      axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:3001/getUser",
      }).then((res) => {
              setData(res.data)
              console.log(res.data)
          });
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1>Login</h1>
        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default App;
