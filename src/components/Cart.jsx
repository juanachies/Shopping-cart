import { Button } from "react-bootstrap";

const Cart = ({cartList, onDelete, onClear}) => {

    const handleDeleteProd = (code) => {
        onDelete(code)
    }

    const total = cartList.reduce((acc, prod) => acc + prod.price, 0);

    return (
        <div>
            <h2>Carrito de compras:</h2>
            {
                cartList.map((prod) => (
                    <div key={prod.code} className="d-flex justify-content-center gap-3">
                        <p>{prod.name} - ${prod.price}</p>
                        <Button 
                            variant='danger' 
                            size="sm" 
                            className="mb-3" 
                            onClick={() => handleDeleteProd(prod.code)}
                        >
                            Eliminar
                        </Button>
                    </div>
                ))
            }
            <h4>Total: ${total}</h4>
            <Button onClick={onClear}>Comprar</Button>
        </div>
    )
}

export default Cart;