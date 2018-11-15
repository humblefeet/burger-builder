import React from 'react'

const Ingredient = (props) => (
    <div className="component" color={props.color}>
        {props.name}
    </div>
)

export default Ingredient