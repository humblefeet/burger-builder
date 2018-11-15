import React from 'react'
import BurgerStack from  '../BurgerStack/BurgerStack'

const BurgerPane = (props) =>  (
    <div className="component burgerPane">
        BurgerPane
        <BurgerStack stack={props.stack}/>
        <button onClick={props.clearBurger}>
            Clear Burger
        </button>
    </div>

)

export default BurgerPane