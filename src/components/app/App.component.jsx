import axios from "axios";
import React, {useEffect, useState} from "react"
import './App.style.css';
import CardList from '../card-list/card-list-component';
import SearchBox from "../search-box/search-box.component";

function App() {
  const [state, setState] = useState({
    monsters: [],
    searchField: ""
  })

  useEffect(() => {
    async function getMonsters(){
      let monsters = await (await axios.get(`https://jsonplaceholder.typicode.com/users`))
      console.log(monsters)
      setState((prev) => ({...prev, monsters:monsters.data}))
    }
    getMonsters()
  }, [])

  const handleSearch = (e) => {    
      setState(prev => ({ ...prev, searchField: e.target.value}))
  }

  /*
  Note: when the state changes, component will be re-rendered.
  */
  const {monsters, searchField} = state
  console.log(searchField)
  const filteredMonsters = monsters.filter((monster) => 
     monster.name.toLowerCase().includes(searchField.toLowerCase())) 

  return (
    <div className="App"> 
      <SearchBox placeHolder="Search Monsters" handleSearch={handleSearch}/>   
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;