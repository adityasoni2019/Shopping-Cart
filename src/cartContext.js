// context is particularly nice when we want to use data across a bunch of different part of the application. 

import { createContext, useState } from "react";
import { productArray , getProductData} from "./productStore";


// We don't define functions inside the context. 
export const CartContext = createContext({
    items: [], 
    getProductQuantity: ()=> {}, 
    addOneToCart: ()=> {}, 
    removeOneFromCart: ()=> {}, 
    deleteFromCart: ()=> {}, 
    getTotalCost: () => {} 
});

// cart provider
export function CartProvider({children}){
    
    const [cartProducts, setCartProducts] = useState([]);


    // [{id: 1, quantity: 2}]
    
    function getProductQuantity(id){
        
        const quantityOfId = cartProducts.find(product_iterate=> product_iterate.id=== id)?.quantity 
        
        if(quantityOfId==undefined) return 0; 

        return quantityOfId;

    }

    function addOneToCart(id){
        const quantityOfId = getProductQuantity(id);

        // if the id doesn't exist in the cart. 
        if(quantityOfId ===0){
            setCartProducts(
                [
                    ...cartProducts, 
                    {
                        id: id, 
                        quantity: 1
                    }
                ]
            )
        }
        else{
            // product is there in our cart. 
            setCartProducts(
                cartProducts.map(
                    product_iterate => product_iterate.id === id
                    ? {...product_iterate, quantity: product_iterate.quantity +1} // if the id matches.
                    : product_iterate  // if it doesn't.
                )
            )
        }
    }
    
    function removeOneFromCart(id){
        // BUT, WHAT IF, THE QUANTITY OF THE THING IS 0.
        const quantityOfId = getProductQuantity(id);
    
        // if the id doesn't exist in the cart. 
        if(quantityOfId ==1){
            deleteFromCart(id);
        }
        else{
            
            // product is there in our cart. 
            setCartProducts(
                cartProducts.map(
                    product_iterate => product_iterate.id === id
                    ? {...product_iterate, quantity: product_iterate.quantity -1} // if the id matches.
                    : product_iterate  // if it doesn't.
                )
            )
        }

    }

    function deleteFromCart(id){
        // [] if an object meets a condition, add the object to an array 
        // [product1, produt2, product3] 
        // [product2, product3] 

        setCartProducts(
            cartProducts => 
            
            cartProducts.filter(
                // if it's false, it's not going to be added in our array.
                currentProduct_iterate => {
                    return currentProduct_iterate.id != id 
                }
            )
        )

    }

    function getTotalCost(){
        let totalCost = 0;
        
        cartProducts.map((cartItems) => {
            const productData = getProductData(cartItems.id);
            totalCost += (productData.price* cartItems.quantity);
        })
        return totalCost; 
    }


    const contextValue = {
        items: cartProducts, 
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost

    }

    return (
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// CODE HERE.

// context (cart, addToCart, removeCart)
// Provider -> gives the react app access to all the things in your context. 

export default CartProvider; 