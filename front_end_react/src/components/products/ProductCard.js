// Created by David Walshe on 25/02/2020
// npm imports
import React, {useState} from "react";
import {Badge, Button, Card, Form} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/styles.scss"
import {connect} from "react-redux";
import {addItem} from "../../actions/cart";

const ProductCard = (props) => {

    const {data, displayConfirmation} = {...props};

    const [buyQuantity, setBuyQuantity] = useState(1);

    const updatePrice = (e) => {
        let {max, min, value} = e.target;
        max = parseInt(max);
        min = parseInt(min);

        let v = !isNaN(value) && value >= min && value <= max ? value : "";
        setBuyQuantity(v)
    };


    const addToCart = (e) => {
        displayConfirmation(data, buyQuantity);
        if (!props.customer.customerID) {
            updateLocalState()
        } else {
            updateServiceState()
        }
    };

    const updateLocalState = () => {
        /**
         * Updates the local state if a user is not logged in.
         */
        console.log("Not Logged In");
        props.dispatch(addItem(data, parseInt(buyQuantity)));
        displayConfirmation(data, buyQuantity);
        setBuyQuantity(1);
    };

    const updateServiceState = () => {
        /**
         * Updates the service database if the user is logged in.
         */
        console.log("Logged In")
    };


    return (
        <>
            <Card className={"h-100 shadow-sm bg-white rounded"}>
                <Card.Header className={"d-flex mb2-2 justify-content-around"}>{data.name}</Card.Header>
                <Card.Img variant={"top"} src={data.image}/>

                <Card.Body className={"d-flex flex-column"}/>
                <div className={"d-flex mb-2 justify-content-around"}>
                    <Card.Title className={"mb-0 font-weight-bold"}>{data.quantity} In-Stock</Card.Title>
                    <br/>
                    <Badge pill className={"mb-2"} variant={"warning"}>
                        €{data.price}
                    </Badge>
                </div>
                {/*<Card.Text className={"text-secondary"}></Card.Text>*/}
                <div className={"d-flex mb-2 justify-content-around quantity-gauge"}>
                    <InputGroup>
                        <div className={"d-flex mb-2 justify-content-around"}>
                            <div className={"d-flex mb-2 justify-content-around input-quantity"}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className={"input-quantity"}
                                    type={"number"}
                                    min={1}
                                    max={data.quantity}
                                    name={`qty${data.productID}`}
                                    value={buyQuantity}
                                    onChange={(e) => updatePrice(e)} //setBuyQuantity(e.target.value >= 1 && !isNaN(e.target.value) ? e.target.value : "")}
                                />
                            </div>
                            <div className={" d-flex mb-2 justify-content-aroundinput-price"}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon2">€</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className={"input-price"}
                                    type={"text"}
                                    disabled={true}
                                    name={`price${data.productID}`}
                                    value={(buyQuantity * data.price).toFixed(2)}
                                    onChange={updatePrice}
                                />
                            </div>
                        </div>
                    </InputGroup>
                </div>

                <Button
                    // onClick={() => displayConfirmation(data)}
                    onClick={addToCart}
                    className={"mt-auto font-weight-bold"}
                    variant={"success"}
                    block
                >Buy</Button>
            </Card>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    }
};

export default connect(mapStateToProps)(ProductCard);