import React,{ useState, useEffect} from 'react';
import './App.css';
import { getAllPokemon, getPokemon} from './components/pokemon';
import Mainpage from './components/Mainpage';
import Pokeinfo from './components/pokeinfo';


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemoninfo, setPokemoninfo] = useState({});
  const [view, setView] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100'
  

  

  const pokemoninformation = (pokeinfo) =>{
    setPokemoninfo(pokeinfo)
    setView('pokemoninfo')
    
  }



  useEffect(()=>{
    async function fetchData(){
      let response = await getAllPokemon(initialUrl);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

 const listView = (image, name) => {
    
    var poke = pokemonData.filter(filtering => filtering.name === name)
    console.log(poke)

    var updatedPokemon = {
      name : poke[0].name,
      url : poke[0].url,
      pic : image

    }

    
    const newPokeList = pokemonData.map(el => (el.name === name ? Object.assign(el, updatedPokemon) : el))
    
      setPokemonData (newPokeList)

    setView ('')

 }
  

  const loadingPokemon = async (data) => {
      let pokeData = await Promise.all(
      data.map(async AllPokemons =>{
      let Rec = await getPokemon(AllPokemons.url);
      return Rec;
    })
    );

    setPokemonData(pokeData );
  };
  switch (view) {
    case 'pokemoninfo':
    
      return(
        <div>
          <Pokeinfo listView={listView}
           pokemoninfo={pokemoninfo}/>
        </div>
      )

      default:
      return(
    <div>
    { 
    loading ? <h1>Loading...</h1>
     :(<>
    <div className="grid-container">
      {pokemonData.map((AllPokemons,i) =>{
        return <Mainpage key={i}
        AllPokemons={AllPokemons} 
        
        pokemoninformation={pokemoninformation}/>

      })}
    </div> </>
    )}
    </div>)
  }
}

export default App;