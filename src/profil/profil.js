import React from 'react'

const Profil = (props) => {
    return (
        <div>
            <h1 style={{color:'red'}}>{props.fullName}</h1>
            <h1 style={{color:'green'}}>{props.bio}</h1>
            <h1 style={{color:'green'}}>{props.profession}</h1>
            <div>{props.children}</div>
        </div>
        
    )
}

export default Profil;
