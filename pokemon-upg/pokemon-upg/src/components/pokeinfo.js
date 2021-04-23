import React from 'react';
const Pokeinfo = ({setView,pokemoninfo}) => {
    const backHandler = () => {
        setView('')
    }
    
    return (
        
       <div className = "Grid-Item">
    
        <div className="">
            {pokemoninfo.types.map((type,i) =>{
                return(
             <div key = {i} className="Card_type">
                {type.type.name}
                    </div>
             )})}
                </div>
                    <div className="Grid-Item">
                     <div>
                         <img src={pokemoninfo.sprites.other.dream_world.front_default}/> 
                         <button onClick={backHandler}>Back</button>   
                     </div>
                         <div className="Grid-Item">
                         <p className="Grid-Item">Weight of pokemon :{pokemoninfo.weight}</p>
                      </div>
                      <div className="Grid-Item">
                          <p className="Grid-Item">Height of pokemon :{pokemoninfo.height}</p>
                     </div>
                     <div className="Grid-Item" >
                         <p className="Grid-Item">Pokemon abilitys</p>
                    <div>{pokemoninfo.abilities.map((ability,i) =>{
                    return(
                     <div key = {i} >
                     {ability.ability.name}
                     </div>
                    )
                })}
                </div>
             </div>
             <div className="Grid-Item">
                    <p className="Grid-Item">Moves</p>
                    <div>{pokemoninfo.moves.map((move,i) =>{
                    return(
                        <div key = {i} >
                           {move.move.name}
                        </div>
                    )
                })},
                
                </div>
             </div>

    </div>
    </div>
    )
}

export default Pokeinfo;