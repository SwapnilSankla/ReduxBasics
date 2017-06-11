var store = require("redux");
var reducer = require("./reducers");
var initialState = {
    name: "",
    rollNumber: 0
};

module.exports = {
    create: function () {
        // If reducers need to split across multiple function without specifying the root reducer
        // then use combineReducers. However then needs to follow following rules.

        // Any reducer passed to combineReducers must satisfy these rules:
        // 1. For any action that is not recognized, it must return the state given to it as the first argument.
        // 2. It must never return undefined. It is too easy to do this by mistake via an early return statement, so
        // combineReducers throws if you do that instead of letting the error manifest itself somewhere else.
        // 3. If the state given to it is undefined, it must return the initial state for this specific reducer.

        // return store.createStore(store.combineReducers({
        //         name: reducer.updateNameReducer,
        //         rollNumber: reducer.updateRollNumberReducer
        //     }),
        //     initialState);

        // Single ruducer
        return store.createStore(reducer.update, initialState);
    }
};
