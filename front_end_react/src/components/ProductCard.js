// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Card, Badge, Button} from "react-bootstrap";

const ProductCard = ({data}) => (
    <>
        <Card className={"h-100 shadow-sm bg-white rounded"}>
            <Card.Img variant={"top"} src={data.image}/>
            <Card.Body className={"d-flex flex-column"}/>
            <div className={"d-flex mb-2 justify-content-around"}>
                <Card.Title className={"mb-0 font-weight-bold"}>{data.name}</Card.Title>
                <Badge pill className={"mb-1"} variant={"warning"}>
                    €{data.price}
                </Badge>
            </div>
            <Card.Text className={"text-secondary"}>Quantity: {data.quantity}</Card.Text>
            <Button
                onClick={() => console.log("Bought")}
                className={"mt-auto font-weight-bold"}
                variant={"success"}
                block
            >Buy</Button>
        </Card>
    </>
);

export default ProductCard;