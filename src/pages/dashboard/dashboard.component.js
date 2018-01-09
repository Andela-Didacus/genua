"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// styles
require("react-toastify/dist/ReactToastify.min.css");
require("../../../assets/css/font.scss");
require("./dashboard.scss");
/**
 * Dashboard Component
 *
 * Dashboard for The Learning Map
 */
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders Genua page
     *
     * @return {object} JSX for dashboard component
     */
    DashboardComponent.prototype.render = function () {
        return (React.createElement("div", { className: "home-container" },
            React.createElement("div", { className: "Navigation-bar" },
                React.createElement("div", null,
                    React.createElement("a", null, "Home")),
                React.createElement("div", null,
                    React.createElement("a", null, "About Us")),
                React.createElement("div", null,
                    React.createElement("a", null, "Contacts")))));
    };
    return DashboardComponent;
}(React.Component));
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map