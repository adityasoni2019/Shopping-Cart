import { Button, Modal, Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React from "react";
import { useState } from "react";


function NavbarComponent(){

    // use state hooks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand = "sm">
            {/* expand = "sm" if for when  */}

                <Navbar.Brand href = '/'>E Commerce App</Navbar.Brand>
                <Navbar.Toggle/>

                <Navbar.Collapse className = "justify-content-end">
                    <Button onClick = {handleShow}>Cart 0 Items</Button>
                </Navbar.Collapse>

            </Navbar>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>
            </Modal>    
            
        </>
    )
}

export default NavbarComponent;