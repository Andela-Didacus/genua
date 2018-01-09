"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var routes_1 = require("./routes/routes");
var store_1 = require("./store/store");
var store = store_1.default({});
react_dom_1.render(React.createElement(routes_1.default, { store: store }), document.getElementById('app'));
//# sourceMappingURL=index.js.map