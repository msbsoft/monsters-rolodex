import React, {useState} from "react"
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list-component';

function App() {
  const [monsters, setMonsters] = useState([
    {
        id: 1,
        name: "Leanne Graham",
        email: "Leanne.Graham@monsters.com"
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Ervin.Howell@monsters.com"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Clementine.Bauch@monsters.com"
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Patricia.Lebsack@monsters.com"
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        email: "Chelsey.Dietrich@monsters.com"
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        email: "Dennis.Schulist@monsters.com"
    },
    {
      id: 7,
      name: "Kurtis Weissnant",
      email: "Kurtis.Weissnant@monsters.com"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir",
      email: "Nicholas.Runolfsdottir@monsters.com"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Glenna.Reichert@monsters.com"
    },
    {
      id: 10,
      name: "Clentina DuBuque",
      email: "Clentina.DuBuque@monsters.com"
    }
  ])

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
