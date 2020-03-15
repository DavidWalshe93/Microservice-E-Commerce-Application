// Created by David Walshe on 22/02/2020

const Order = require("../../src/model/order");

// ==================================================================================
// ORDER SETUP
// ==================================================================================
const mock_order_generator = (size = 3) => {
    let mock_orders = [];
    for (let i = 1; i < size + 1; i++) {
        mock_orders.push({
            customerID: 1,
            saledate: i + "-02-2020",
            orderDetails: [
                {
                    productID: 1,
                    name: "car1",
                    quantity: 100,
                    price: 2,
                    image: "fake.jpeg"
                },
                {
                    productID: 2,
                    name: "car2",
                    quantity: 200,
                    price: 20,
                    image: "fake2.jpeg"
                }
            ]
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
        mocks[i].orderDetails = JSON.stringify(mocks[i].orderDetails);
        await Order.create(mocks[i]);
    }
};

module.exports = {setupOrderTable};