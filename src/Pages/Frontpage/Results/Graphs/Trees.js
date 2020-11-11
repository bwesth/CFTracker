import React from 'react'
import tree from '../img/tree.png'

export default ({amount}) => {

    let trees = []

    {for (let i = 0; i < amount; i++) {
        trees.push(<img src={tree} />)
    }}


    return <div className="trees">

        {trees}

    </div>
}