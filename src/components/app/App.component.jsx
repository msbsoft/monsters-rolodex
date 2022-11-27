import axios from "axios";
import React, {useEffect, useState} from "react"
import './App.style.css';
import CardList from '../card-list/card-list-component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    async function getMonsters(){
      let monsters = await (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data
      setMonsters(monsters)
      setFilteredMonsters(monsters);    
    }
    getMonsters()
  }, [])

  const handleSearch = (e) => {    
    if (!e.target.value) {
      setFilteredMonsters(monsters)
    }  
    
    let filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(e.target.value.toLowerCase())) 
    
    setFilteredMonsters(filteredMonsters)
  }

  return (
    <div className="App">    
      <input type="search" onChange={handleSearch} placeholder="Search Monsters"/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
