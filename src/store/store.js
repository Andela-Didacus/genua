"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_immutable_state_invariant_1 = require("redux-immutable-state-invariant");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("../reducers");
var middlewares = process.env.NODE_ENV === 'production' ?
    [redux_thunk_1.default] : [redux_thunk_1.default, redux_immutable_state_invariant_1.default()];
var initialState = {};
/**
 * @export
 * @param {any} {}
 * @returns
 */
var configureStore = function (_a) {
    return redux_1.createStore(reducers_1.default, initialState, redux_1.applyMiddleware.apply(void 0, middlewares));
};
exports.default = configureStore;
//# sourceMappingURL=store.js.map