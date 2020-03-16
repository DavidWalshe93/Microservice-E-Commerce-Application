// Created by David Walshe on 15/03/2020

import {Button, Modal, Table} from "react-bootstrap";
import React from "react";
import OrderItems from "./OrderItems";


const OrderModal = (props) => {

    const {show, setShow, modalData} = {...props};

    console.log("MODAL", modalData);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const getMessage = () => {
    //     return {
    //         header: "Hello Word", //order.orderID,
    //         body: `${order.totalPrice}`,
    //     }
    // };

    return (
        <>
            {/*{renderRedirect()}*/}
            <Modal
                show={show}
                size={"lg"}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="login-warning-message"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-warning-message">
                        {/*{getMessage().header}*/}
                        Order No. {modalData.orderID}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Sale date: {modalData.saledate}</h4>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ProductID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <OrderItems modalData={modalData}/>
                        </tbody>
                    </Table>
                    <h4>Total: €{modalData.orderTotal}</h4>
                    <Button
                        className={"modal-button-secondary"}
                        variant="primary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OrderModal;