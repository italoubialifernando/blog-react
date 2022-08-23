import React from "react";


export function Header () {

    const title = 'BLOG'
    const creator = title.split(``)
    const letters = creator.map((letter, index)=> <h1 style={{ animationDelay: "calc(.25s * "+ index+")" }}> {letter} </h1> )
 
    return(
    <div className='waviy'>
        {letters}
 </div>
    
 )
}