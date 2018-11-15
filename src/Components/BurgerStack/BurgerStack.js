import React  from 'react';
// import Ingredient from '../Ingredients/Ingredient'

const BurgerStack = (props) => {
    console.log(props)
    return (
        <div className="component">
            {props.stack.map((choice,idx) => 
                <div key={idx} className="component" style={{backgroundColor: choice.color}}>
                    {choice.name}
                </div>
            )}
        </div>
    )
}

export default BurgerStack