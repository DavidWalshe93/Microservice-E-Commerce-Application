// Created by David Walshe on 25/02/2020
// npm imports
import React, {useState} from "react";
import {Badge, Button, Card, Form} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/styles.scss"
import {connect} from "react-redux";
import {addItem} from "../../actions/cart";
import addToServiceCart from "../../requests/cart/addToCart";

const ProductCard = (props) => {

    // Deconstruct params
    const {data, displayConfirmation} = {...props};

    // Setup component state
    const [buyQuantity, setBuyQuantity] = useState(1);

    const updatePrice = (e) => {
        /**
         * Callback to update shown price of item when selected quantity changes.
         */
        let {max, min, value} = e.target;
        max = parseInt(max);
        min = parseInt(min);

        let v = !isNaN(value) && value >= min && value <= max ? value : "";
        setBuyQuantity(v)
    };

    const addToCart = async (e) => {
        /**
         * Callback method when buy button is clicked.
         */
        const item = getItem();

        displayConfirmation(data, buyQuantity);
        setBuyQuantity(1);
        if (!props.customer.customerID) {
            await updateLocalState(item)
        } else {
            await updateServiceState(item)
        }
    };

    const getItem = () => {
        /**
         * Helper method to return item data to add to cart.
         */
        return {
            ...data,
            quantity: parseInt(buyQuantity)
        }
    };

    const updateLocalState = (item) => {
        /**
         * Updates the local state of React if a item is added to the cart.
         */
        props.dispatch(addItem(item));
    };

    const updateServiceState = async (item) => {
        /**
         * Updates the service database if an item is added to the cart and a user is logged in.
         */
        try {
            const response = await addToServiceCart(props.customer.customerID, item);
            updateLocalState({
                productID: response.productID,
                name: response.name,
                price: response.price,
                quantity: item.quantity,        // Server has absolute quantity, we only want to add the relative increase in quantity to the current state.
                image: response.image,
            });
        } catch (e) {
            console.log(e)
        }
    };


    return (
        <>
            <Card className={"h-100 shadow-sm bg-white rounded"}>
                <Card.Header className={"d-flex mb2-2 justify-content-around"}>{data.name}</Card.Header>
                <Card.Img variant={"top"} src={data.image}/>
                {console.log(data.image)}

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
                    onClick={async (e) => {
                        await addToCart(e);
                    }}
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