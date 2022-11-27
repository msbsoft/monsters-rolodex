import axios from "axios";
import React, {useEffect, useState} from "react"
import './App.style.css';
import CardList from '../card-list/card-list-component';
import SearchBox from "../search-box/search-box.component";

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  async getMonsters() {
    let monsters = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    this.setState(prev => ({...prev, monsters:monsters.data}), console.log(monsters.data))
  }

  componentDidMount(){   
    this.getMonsters()
  }     
  
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => 
     monster.name.toLowerCase().includes(searchField.toLowerCase())); 

    return (
      <div className="App"> 
        <SearchBox placeHolder="Search Monsters" handleSearch={(e) => this.setState({searchField: e.target.value})}/>   
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
