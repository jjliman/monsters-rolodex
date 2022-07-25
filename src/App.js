// import { Component } from 'react';
import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  console.log('render');
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // console.log(searchField);
  useEffect(() => {
    console.log('in useEffect fetch callback');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    console.log('in useEffect filter callback: ', monsters);
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  return (
    <div className="App">
      <h1 className='app-title'>Cats Rolodex</h1>

      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(
//         () => {
//           // console.log('setting state...');
//           return { monsters: users };
//         }
//       ));
      
//   }

//   /*
//   If you use normal function declaration, you have to bind this function in onChange
//   onSearchChange(event) {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   }
//   */
//   onSearchChange = (event) => {
//     // console.log(this);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField };
//       },
//       () => {
//         // console.log(this.state);
//       }
//     );
//     // console.log(this);
//   }

//   render() {
//     console.log('render App');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
//     return (
//       <div className="App">
//         <h1 className='app-title'>Cats Rolodex</h1>

//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
  
// }

export default App;
