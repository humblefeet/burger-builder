import React, { Component } from 'react';
import './App.css';
import IngredientList from './Components/IngredientsList/IngredientList'
import BurgerPane from './Components/BurgerPane/BurgerPane'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredients: [
                    {name: 'Kaiser Bun', color: 'saddlebrown'},
                    {name: 'Sesame Bun', color: 'sandybrown'},
                    {name: 'Gluten Free Bun', color: 'peru'},
                    {name: 'Beef Patty', color: '#3F250B'},
                    {name: 'Soy Patty', color: '#3F250B'},
                    {name: 'Black Bean Patty', color: '#3F250B'},
                    {name: 'Chicken Patty', color: 'burlywood'},
                    {name: 'Lettuce', color: 'lawngreen'},
                    {name: 'Tomato', color: 'tomato'},
                    {name: 'Bacon', color: 'maroon'},
                    {name: 'Onion', color: 'lightyellow'}
                  ],
      stack: []
    }
    this.addToBurger = this.addToBurger.bind(this)
    this.clearBurger = this.clearBurger.bind(this)
  }

  addToBurger(e){
    var click = e.target.parentNode.firstChild.textContent
    var item = this.state.ingredients.findIndex(ingredient => ingredient.name === click)
    var stacks = this.state.stack
    stacks.push(this.state.ingredients[item])
    this.setState({
      stack:stacks
    })
    console.log(stacks)
  }

  clearBurger(){
    this.setState({
      stack: []
    })

  }

  render() {
    return (
      <div>
        <header className="App-header">
          Burger Builder
        </header>
        <div className="App">

          <IngredientList addToBurger={this.addToBurger}  ingredients={this.state.ingredients}/>
          <BurgerPane stack={this.state.stack}  clearBurger={this.clearBurger}/>

        </div>
      </div>
    );
  }
}

export default App;
