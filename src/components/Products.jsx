import ProductCard from "./ProductCard"
import Cart from "./Cart"
import { useState } from "react"

const Products = ({productList}) => {

    const [cartList, setCartList] = useState([])

    const handleAddProd = (product) => { 
        const exists = cartList.some((prod) => prod.code === product.code)

        product.isAvailable ? 
            !exists ? 
                setCartList((prev) => [...prev, product]) 
                : 
                alert('Ya esta en el carrito')
            :
            alert('Producto no disponible');
    }

    const handleDeleteProd = (code) => {
        setCartList(prev => prev.filter(prod => prod.code !== code))
    }

    const handleClear = () => {
        setCartList([])
        alert('Compra realizada')
    }

    return (
        <>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {productList.map(product =>
                <ProductCard 
                    key={product.code}
                    code={product.code}
                    name={product.name}
                    price={product.price}
                    isAvailable={product.isAvailable} 
                    onAddProd={() => handleAddProd(product)}                   
                    />
            )}
        </div>
        <Cart cartList={cartList} onDelete={handleDeleteProd} onClear={handleClear}/>
        </>
    )
}

export default Products