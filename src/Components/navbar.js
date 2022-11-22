import { Button, Modal, Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import CartProduct from "./CartProduct";

function NavbarComponent(){

    const cart = useContext(CartContext);
    // use state hooks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    // https://www.youtube.com/watch?v=bAUMuuRH99o - refer this video. from 9:00
    
    return (
        <>
            <Navbar expand = "sm">
            {/* expand = "sm" if for when  */}

                <Navbar.Brand href = '/'>E Commerce App</Navbar.Brand>
                <Navbar.Toggle/>

                <Navbar.Collapse className = "justify-content-end">
                    <Button onClick = {handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>

            </Navbar>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {productsCount > 0 ?

                        <>
                            <p>Items in your cart: </p>
                            {
                                cart.items.map((current_product_iterate, idx) =>(
                                    <CartProduct key = {idx} id = {current_product_iterate.id} quantity = {current_product_iterate.quantity}></CartProduct>
                                ))
                            }

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant = "success">Purchase Items!  </Button>
                        </>
                        :
                        <h1>There are no items in the cart.</h1>
                    }
                    {/* <h1>This is the modal body</h1> */}
                </Modal.Body>
            </Modal>    
            
        </>
    )
}

export default NavbarComponent;