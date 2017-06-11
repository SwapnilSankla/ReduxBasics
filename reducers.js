module.exports = {
    updateNameReducer: function (state, action) {
        if (action.type === "UPDATE_NAME") {
            return Object.assign({}, state, {name: action.name});
        }
        // cannot return undefined stae, need to retun initial value
        return state === undefined ? {name: ""} : state;
    },

    updateRollNumberReducer: function (state, action) {
        if (action.type === "UPDATE_ROLL_NUMBER") {
            return Object.assign({}, state, {rollNumber: action.rollNumber});
        }
        // cannot return undefined stae, need to retun initial value
        return state === undefined ? {rollNumber: 0} : state;
    },

    update: function(state, action) {
        if(action.type === "UPDATE_NAME") {
            return Object.assign({}, state, {name: action.name})
        } else if(action.type === "UPDATE_ROLL_NUMBER") {
            return Object.assign({}, state, {rollNumber: action.rollNumber});
        }
        // simpler just returned state passed to function if no action is matched.
        return state
    }
};
