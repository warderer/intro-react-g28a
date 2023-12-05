import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const GifCard = (props) => {
  const { gifTitle, imgUrl } = props
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={imgUrl} />
        <Card.Body>
          <Card.Title>{gifTitle}</Card.Title>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default GifCard
