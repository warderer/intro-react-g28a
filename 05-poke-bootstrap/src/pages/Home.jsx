import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>Pokédex</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter name'
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>

        <div className='row'>
          {filteredPokemons.map(pokemon => (
            <div className='col-sm-4 mb-4' key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>
                <div className='card'>
                  <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                  <div className='card-body'>
                    <h4 className='card-title'>{pokemon.name}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
