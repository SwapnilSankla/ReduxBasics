var store = require('./store');
var action = require('./actions');
var seatMapStore = store.create();
seatMapStore.dispatch(action.updateNameAction("Swapnil"));
seatMapStore.dispatch(action.updateRollNumberAction(2));
console.log("RollNumber:", seatMapStore.getState().rollNumber);
console.log("Name:", seatMapStore.getState().name);
console.log("Before mutation State:", seatMapStore.getState());
// Redux does not guarantee immutablility. Able to mutate name.
seatMapStore.getState().name = 'sdfgh'
console.log("After mutation State:", seatMapStore.getState());
