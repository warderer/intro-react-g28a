import { useEffect, useState } from 'react'
import './App.css'
import GifCard from './components/GifCard'

function App () {
  const [gifs, setGifts] = useState([])

  // getGifts hará una petición a la API de GIPHY y nos entregará un arreglo de gifs
  const getGifs = () => {
    // Usa tu propia api_key después del =
    fetch('https://api.giphy.com/v1/gifs/search?q=tacos&limit=10&api_key=AQUÍVATUAPI_KEY').then(result => result.json())
      .then(res => {
        const { data } = res
        console.log('data', data)
        setGifts(data)
      })
  }

  // La función getGifs se ejecutará antes de que el componente App sea montado
  useEffect(() => {
    getGifs()
  }, [])

  return (
    <>
      {gifs.map(gif => (<GifCard key={gif.id} gifTitle={gif.title} imgUrl={gif.images.original.url} />))}
    </>
  )
}

export default App
