import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list';
import './App.css';
import SearchBox from './components/search-box/search-box';

const App = () => {
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 
  const [searchField, setSearchField] = useState(''); 


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users)
    )
  }, [])


  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonsters(newfilteredMonsters)
  }, [monsters, searchField])
  

  const onSearchChange = (event) => {
    const targetValue = event.target.value.toLowerCase()
    setSearchField(targetValue)
  }

   return(
    <div className='App'>
       <SearchBox 
         className='search-box'
         onChangeHandler={onSearchChange}
         placeholder='Search monsters'
       />
       <CardList monsters={filteredMonsters} />
       </div>
  )
}

export default App;





// import React, { Component } from 'react';
// import CardList from './components/card-list/card-list';
// import './App.css';
// import SearchBox from './components/search-box/search-box';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({monsters: users})
//     )
//   }

//   onSearchChange = (event) => {
//     const targetValue = event.target.value.toLowerCase()
//     this.setState(
//       () => {
//       return {searchField: targetValue }
//     })
//   }


//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (  
//       <div className='App'>
//       <SearchBox 
//         className='search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='Search monsters'
//       />
//       <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

// export default App;
