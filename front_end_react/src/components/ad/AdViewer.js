// Created by David Walshe on 27/02/2020

import React from "react";
import cars from "../../data"
import Ad from "./Ad";
import {Carousel, Container, Row, Col} from "react-bootstrap";

const AdViewer = () => {

    console.log(cars);

    return (
        <Col md={{span: 2, offset: 0}}>
            <Carousel indicators={false} controls={false}>
                {cars.map((car) => (
                    <Ad key={car.id} car={car}/>
                ))}
            </Carousel>
        </Col>

        // <Container>
        //     <Row>
        //         <Col md={{span: 4, offset: 10}}>
        //
        //         </Col>
        //     </Row>
        // </Container>
    )
};

export default AdViewer;
