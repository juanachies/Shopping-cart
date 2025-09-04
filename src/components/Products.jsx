import ProductCard from "./ProductCard"
import Cart from "./Cart"
import { useState } from "react"

const Products = ({productList}) => {

    const [cartList, setCartList] = useState([])

    const handleSelect = (name) => { 
        setCartList((prev) => [...prev, name])
    }

    return (
        <>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {productList.map(product =>
                <ProductCard 
                    key={product.code}
                    name={product.name}
                    price={product.price}
                    isAvailable={product.isAvailable} 
                    onSelect={handleSelect}                   
                    />
            )}
        </div>
        <Cart cartList={cartList}/>
        </>
    )
}

export default Products