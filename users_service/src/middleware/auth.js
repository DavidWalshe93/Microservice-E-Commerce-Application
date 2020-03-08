// Created by David Walshe on 08/03/2020

// npm imports
const jwt = require("jsonwebtoken");

// local imports
const Customer = require("../model/customer");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get the user matching the decoded id.
        const customer = await Customer.findOne({
            where: {
                customerID: decoded.id
            }
        });

        // Verify customer exists in DB.
        if (!customer) {
            throw new Error("Profile does not exist")
        }

        let validToken = JSON.parse(customer.tokens).some(item => {
            return item === token
        });
        // Verify customer has a valid token.
        if (!JSON.parse(customer.tokens).some(item => item === token)) {
            throw new Error("You are not logged in")
        }

        req.token = token;
        req.customer = customer;
        next();
    } catch (e) {
        console.log(e);
        res.status(401).send({error: `Please authenticate - ${e}`})
    }
};

module.exports = auth;