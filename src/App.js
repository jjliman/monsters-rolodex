import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          // console.log('setting state...');
          return { monsters: users };
        },
        () => {
          console.log('setState callback');
        }
      ));
      
  }

  /*
  If you use normal function declaration, you have to bind this function in onChange
  onSearchChange(event) {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {
        console.log(this.state);
      }
    );
  }
  */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {
        console.log(this.state);
      }
    );
    // console.log(this);
  }

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
        {filteredMonsters.map((monster) => {
          return(<div key={monster.id}><h1>{monster.name}</h1></div>);
        })}
      </div>
    );
  }
  
}

export default App;
