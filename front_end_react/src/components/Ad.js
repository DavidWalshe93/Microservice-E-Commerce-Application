// Created by David Walshe on 27/02/2020

import React from "react";
import {Button, Carousel} from "react-bootstrap";
import "../styles/styles.scss"

const Ad = ({car, className}) => {
    return (
        <>
            <Carousel.Item className={className}>
                <img
                    className="d-block w-100"
                    src={car.image}
                    width={90}
                    height={170}
                    alt={"Car Slide"}
                />
                <Carousel.Caption>
                    <Button>Buy</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </>
    )
};

export default Ad;
