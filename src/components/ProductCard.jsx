import {Badge, Card, Button} from 'react-bootstrap'

const ProductCard = ({code, name, price, isAvailable, onAddProd}) => {

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
                <Button onClick={onAddProd}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard