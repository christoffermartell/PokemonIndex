import React from 'react';

function Mainpage({AllPokemons,pokemoninformation}){

    const pokemoninfohandler = () => {
        const pokeinfo = AllPokemons
        pokemoninformation(pokeinfo)
        
    }
    return(
    
        <div className="Card">
         <img src = "#" onClick={pokemoninfohandler} alt={AllPokemons.name}/>   
         <div className="Card_name" onClick={pokemoninfohandler} >{AllPokemons.name }</div>   
         </div> 
            );
}

export default Mainpage;