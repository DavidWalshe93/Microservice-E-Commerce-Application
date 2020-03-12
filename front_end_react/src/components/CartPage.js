// Created by David Walshe on 25/02/2020

// npm import
import React from "react";
import {Button, Col, Container, Image, Table} from "react-bootstrap";
// Local imports
import "../styles/styles.scss"

const CartPage = () => {

    const getTdProps = () => ({
        style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    });

    console.log(getTdProps());

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
                        <tr>
                            <td className={"table-item"}>1</td>
                            <td width={"50px"}><Image src={"/images/car1.jpeg"}/></td>
                            <td className={"table-item"}>Car 1</td>
                            <td className={"table-item"}>€10.45</td>
                            <td className={"table-item"}>10</td>
                            <td className={"table-item"}>€100.45</td>
                            <td width={"30px"} className={"table-item"}><Button variant={"danger"}>Remove</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Container>

        </>
    )
};

export default CartPage;