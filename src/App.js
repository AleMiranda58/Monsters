import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users})
    )
  }

  onSearchChange = (event) => {
    const targetValue = event.target.value.toLowerCase()
    this.setState(
      () => {
      return {searchField: targetValue }
    })
  }


  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (  
      <div className='App'>
      <input 
        className='search-input' 
        type='search'
        placeholder='Search Monster' 
        onChange={onSearchChange}
       />

      {
        filteredMonsters.map(monsters => (
        <h1 key={monsters.id}> { monsters.name }  </h1>
      ))}
      </div>
    )
  }
}

export default App;
