// Created by David Walshe on 07/03/2020

// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
// local imports
import logoutRequest from "../requests/customer/logout";
import {logoutCustomer} from "../actions/customers"
import {removeAll} from "../actions/cart";

class LogoutPage extends React.Component {

    state = {
        token: this.props.token,
        dispatch: this.props.dispatch,
        content: <></>
    };

    async componentDidMount() {

        // When logging out, wait until the customer data is cleared before returning to the
        // login page.
        if (!!this.state.token) {
            try {
                this.state.dispatch(removeAll());
                this.state.dispatch(
                    logoutCustomer(
                        await logoutRequest(this.state.token).then(() => {
                            this.state.content = <Redirect to={"/login"}/>
                        })
                    )
                );
            } catch (e) {
                console.log("error", e)
            }
        }
    }

    render() {
        return this.state.content;
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.customer.token,
        cart: state.cart
    }
};

export default connect(mapStateToProps)(LogoutPage);