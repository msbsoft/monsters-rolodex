import React, {useState} from "react"
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list-component';

function App() {
  const [monsters, setMonsters] = useState([
    {
        id: 1,
        name: "Leanne Graham"
    },
    {
        id: 2,
        name: "Ervin Howell"
    },
    {
        id: 3,
        name: "Clementine Bauch"
    },
    {
        id: 4,
        name: "Patricia Lebsack"
    },
    {
        id: 5,
        name: "Chelsey Dietrich"
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist"
    },
    {
      id: 7,
      name: "Kurtis Weissnant"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir"
    },
    {
      id: 9,
      name: "Glenna Reichert"
    },
    {
      id: 10,
      name: "Clentina DuBuque"
    }
  ])

  return (
    <div className="App">
      <CardList>
        {
          monsters?.map(monster => (
            <h2 key={monster.id}>{monster.name}</h2>
          ))
        }
      </CardList>        
    </div>
  );
}

export default App;
