import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          // console.log('setting state...');
          return { monsters: users };
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
    console.log(this);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {
        // console.log(this.state);
      }
    );
    // console.log(this);
  }

  render() {
    // console.log('render App');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
