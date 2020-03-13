// Created by David Walshe on 25/02/2020

// npm import
import React, {useEffect, useState} from "react";
import {Col, Container, Table} from "react-bootstrap";
// Local imports
import "../styles/styles.scss"
import CartEntry from "./CartEntry";
import {connect} from "react-redux";


const CartPage = (props) => {

    const [items, setItems] = useState(props.cart.items);

    useEffect(() => {
        setItems(props.cart.items);
    }, [props.cart.items]);

    return (
        <>
            <Container fluid={true}>
                <Col xs={{span: 10, offset: 1}}>
                    <Table striped bordered hover size={"sm"} variant="dark">
                        <thead>
                        <tr>
                            <th className={"table-header"}>#</th>
                            <th className={"table-header"}>Product</th>
                            <th className={"table-header"}>Product Name</th>
                            <th className={"table-header"}>Unit Price</th>
                            <th className={"table-header"}>Quantity</th>
                            <th className={"table-header"}>Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <CartEntry key={index} item={item} index={index}/>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Container>

        </>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(CartPage);