import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:''
    };

    /*//case2.1: binding this to handleChange
    this.handleChange = this.handleChange.bind(this);
    */
  }

  //when react renders DOM for the first time, it calls whatever we write the code in below lifecycle method
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // // case2.1: creating function and binding this
  // // below not work until and unless we bind this to the function in constructor

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // case2.2: creating same function using arrow function
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }


  render() {

    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );

    return (
      <div className='App'>
        
        {/* case1: 
            ->whatever we write in between component tag that is the children of the the component
            
        <input 
          type="search" 
          placeholder="search monsters" 
          onChange={ e => {this.setState({ searchField: e.target.value })} }  
        />

        <CardList monsters={filteredMonsters} />

        */}
        
        {/* case2: 
            ->creating the search component rather passing state to onchange event            

        <SearchBox 
          placeholder='search monsters'
          handleChange={ e => {this.setState({ searchField: e.target.value })} }
        /> 
        */}

        {/* case2: 
            ->creating function for handleChange in the class component
            2.1-> not using arrow function
            2.2-> using arrow function
        */}


        <h1>Monsters Industry</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={ e => {this.setState({ searchField: e.target.value })} }
        /> 

        <CardList monsters={filteredMonsters} />

        
      </div>
    );
  }
}

export default App;
