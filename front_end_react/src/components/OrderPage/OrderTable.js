// Created by David Walshe on 15/03/2020

import React, {useEffect, useState} from "react";
import getOrderData from "../../requests/order/getOrderData";
import {connect} from "react-redux";
import {MDBBtn, MDBDataTable} from 'mdbreact';
import "../../styles/styles.scss";

const OrderTable = (props) => {

    const {setShow, customerID, setModalData} = {...props};

    const [orders, setOrders] = useState({});
    const [tableData, setTableData] = useState({});
    const [error, setError] = useState(undefined);

    // Fetch order data on page load.
    useEffect(() => {
        getOrderData(setOrders, customerID, error, setError)
    }, []);

    // Column setup for Table
    const columns = [
        {
            label: 'Order No.',
            field: 'orderNo',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Sale Date',
            field: 'saleDate',
            sort: 'asc',
            width: 220
        },
        {
            label: "Order Size",
            field: "orderSize",
            sort: "asc",
            width: 220
        },
        {
            label: 'Order Total',
            field: 'orderTotal',
            sort: 'asc',
            // width: 400,
        },
        {
            label: '',
            field: 'button',
            sort: 'asc',
            width: 135,
            align: "center"
        },
    ];

    const createTableRow = (order) => {
        let orderTotal = 0;
        let orderSize = 0;
        order.orderDetails.forEach((item) => {
            orderSize += item.quantity;
            orderTotal += (item.quantity * item.price);
        });
        const saleDate = convertMillisToDataTime(order.saledate);
        return {
            orderNo: `${order.orderID}`,
            saleDate,
            orderSize: `${orderSize}`,
            orderTotal: `${orderTotal}`,
            button: <MDBBtn color="light-blue" size="sm" onClick={(e) => {
                console.log(order);
                order = {
                    ...order,
                    orderSize,
                    orderTotal
                };
                setModalData(order);
                setShow(true);
            }}>Order
                Info</MDBBtn>,
        }
    };

    const convertMillisToDataTime = (saleDateInMs) => {
        const datetime = new Date(0);
        datetime.setTime(saleDateInMs);

        let date = `${datetime.getDate()}`.padStart(2, 0);
        let month = `${datetime.getMonth() + 1}`.padStart(2, 0);
        let year = datetime.getFullYear();

        return `${year}/${month}/${date}`;
    };

    useEffect(() => {
        console.log("ORDERS", orders);
        if (Object.keys(orders).length > 0) {
            // Create the table rows.
            const rows = orders.map((order) => {
                return createTableRow(order);
            });

            // Create the table data object
            setTableData({
                columns: columns,
                rows: rows
            });
        }
    }, [orders]);

    try {
        return (
            <>
                <MDBDataTable
                    striped
                    bordered
                    small
                    order={['saleDate', 'desc']}
                    data={tableData}/>
            </>
        )
    } catch (e) {
        console.log(e);
    }

};

const mapStateToProps = (state) => {
    return {
        customerID: state.customer.customerID
    }
};

export default connect(mapStateToProps)(OrderTable);