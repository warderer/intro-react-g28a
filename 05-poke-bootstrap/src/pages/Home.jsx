import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <>
      <div className='container'>
        <h1>Pokédex</h1>

        <div className='row'>
          {pokemons.map(pokemon => (
            <div className='col-sm-4 mb-4' key={pokemon.name}>
              <div className='card'>
                <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                <div className='card-body'>
                  <h4 className='card-title'>{pokemon.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
