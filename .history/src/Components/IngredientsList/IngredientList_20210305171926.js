import React from 'react'
import Ingredient from '../Ingredients/Ingredient'

var IngredientList = (props) => {
    return(
        <div className="component ingredientList">
            IngredientList chance
            {props.ingredients.map((ingredient,idx) => {
                return(
                    <div key={idx} className="component">
                        <Ingredient name={ingredient.name} color={ingredient.color} addToBurger={props.addToBurger}/>
                        <button onClick={props.addToBurger}> > </button>
                    </div>
                )}
            )}


        </div>
    )
}

export default IngredientList
