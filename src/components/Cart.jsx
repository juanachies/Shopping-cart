import { Button } from "react-bootstrap";

const Cart = ({cartList}) => {

    return (
        <div>
            <h2>Carrito de compras:</h2>
            {
                cartList.map((prod, index) => (
                    <div key={index} className="d-flex justify-content-center gap-3">
                        <p>{prod}</p>
                        <Button variant='danger' size="sm" className="mb-3">Eliminar</Button>
                    </div>
                ))
            }
            <Button>Comprar</Button>
        </div>
    )
}

export default Cart;