import React from 'react'


export const Button = (props)=> {
    const [text, changeText] = React.useState("")
    return (
        <button onClick={()=>changeText("I See You")}>{text || props.text}</button>
    )
} 