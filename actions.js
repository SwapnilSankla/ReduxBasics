module.exports = {
    updateNameAction: function (name) {
        return {
            type: "UPDATE_NAME",
            name: name
        }
    },

    updateRollNumberAction: function (rollNumber) {
        return {
            type: "UPDATE_ROLL_NUMBER",
            rollNumber: rollNumber
        }
    }
};
