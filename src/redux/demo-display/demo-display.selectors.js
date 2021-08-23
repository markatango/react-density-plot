import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectDemoData = state => state.demodata;

// output selector that uses the input selector to get a piece of the store.
export const selectData = createSelector(
    [selectDemoData], 
    (demodata) => demodata.data
);
