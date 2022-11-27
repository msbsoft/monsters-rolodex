import axios from "axios";
import React, {useEffect, useState} from "react"
import './App.style.css';
import CardList from '../card-list/card-list-component';

function App() {
  const [monsters, setMonsters] = useState([])
  
  useEffect(() => {
    async function getMonsters(){
      let monsters = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      setMonsters(monsters.data)    
    }
    getMonsters()
  }, [])

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
