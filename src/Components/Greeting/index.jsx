import React from 'react'

function Greeting(props){
    return(
        <h1 className="text-center my-5 text-white">{props.greeting}</h1>
    )
}

export default Greeting