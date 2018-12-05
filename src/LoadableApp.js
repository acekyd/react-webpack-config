
import React, { Component } from "react";
import Loadable from "react-loadable";

const LoadApp = Loadable({
    loader: () => import("./App"),
    loading() {
        return <div>Loading...</div>;
    },
    timeout: 10000 // 10 seconds
});

export default class LoadableApp extends Component {
    render() {
        return <LoadApp />
    }
}