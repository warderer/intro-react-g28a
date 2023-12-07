import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, [id])

  return (
    <div>{pokemon?.name}</div>
  )
}
export default PokemonDetail
