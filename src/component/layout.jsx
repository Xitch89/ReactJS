import React, { Component } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
}

export default Layout;