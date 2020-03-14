// Created by David Walshe on 07/03/2020

// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
// local imports
import logoutRequest from "../requests/customer/logout";
import {logoutCustomer} from "../actions/customers"

class LogoutPage extends React.Component {

    state = {
        token: this.props.token,
        dispatch: this.props.dispatch
    };

    async componentDidMount() {

        if (!!this.state.token) {
            try {
                this.state.dispatch(logoutCustomer(await logoutRequest(this.state.token)));
            } catch (e) {
                console.log("error", e)
            }
        }
    }

    render() {
        return <Redirect to={"/login"}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.customer.token
    }
};

export default connect(mapStateToProps)(LogoutPage);