"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var dashboard_component_1 = require("../pages/dashboard/dashboard.component");
var Root = function (_a) {
    var store = _a.store;
    return (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: dashboard_component_1.DashboardComponent })))));
};
exports.default = Root;
//# sourceMappingURL=routes.js.map