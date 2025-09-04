import {Badge, Card, Button} from 'react-bootstrap'

const ProductCard = ({name, price, isAvailable, onSelect}) => {

    const handleClick = () => {
        onSelect(name)
    }

    return (
        <Card>
            <Card.Body>
                <div>
                    {isAvailable ? 
                        <Badge bg='success'>Disponible</Badge>
                        :
                        <Badge bg='danger'>No disponible</Badge>
                        }
                </div>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>${price}</Card.Subtitle>
                <Button onClick={handleClick}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard