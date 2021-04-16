import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import styled from 'styled-components'

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData,setCharData] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharData(res.data)
      console.log(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Styled = styled.li`
  height: 20%;
  width:100%;
  padding:.7rem;
  &:hover {
    color:red;
 }
  `
 
 

  const Ul = styled.ul`
  list-style-type:none;
  padding:.5rem;
  background-color:rgb(105,105,105, .6);
  width:20%;
  position:center;
  margin-left:70%;
  margin-right:auto;
  `

  return (
    <body>
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
    <div class = "hero-div">
      <Ul>
      {charData.map((user)=>{
       return (
          <Styled key={user.name}>Name: {user.name} 
          <br />
          Gender:{user.gender}
          </Styled>
       )
})}
      </Ul>
    </div>
    </body>
  );
}
export default App;
