// Created by David Walshe on 22/02/2020

const Order = require("../../src/model/order");
const OrderDetails = require("../../src/model/orderDetails");

// ==================================================================================
// ORDER SETUP
// ==================================================================================
const mock_order_generator = (size = 3) => {
    let mock_orders = [];
    for (let i = 1; i < size + 1; i++) {
        mock_orders.push({
            customerID: i,
            saledate: i + "-02-2020"
        });
    }

    return mock_orders;
};

const setupOrderTable = async () => {
    await Order.sync();
    await Order.destroy({
        truncate: true
    });
    const mocks = mock_order_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Order.create(mocks[i]);
    }
};


// ==================================================================================
// ORDER DETAILS SETUP
// ==================================================================================
const mock_order_details_generator = (size = 3) => {
    let mock_order_details = [];
    for (let i = 1; i < size + 1; i++) {
        mock_order_details.push({
            orderID: i,
            productID: i,
            quantity: i
        });
    }

    return mock_order_details;
};

const setupOrderDetailsTable = async () => {
    await OrderDetails.sync();
    await OrderDetails.destroy({
        truncate: true
    });
    const mocks = mock_order_details_generator();
    for (let i = 0; i < mocks.length; i++) {
        await OrderDetails.create(mocks[i]);
    }
};

module.exports = {setupOrderDetailsTable, setupOrderTable};