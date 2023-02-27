import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectDataInput = state => state.data;

// output selector that uses the input selector to get a piece of the store.
export const selectData = createSelector(
    [selectDataInput], 
    (data) => data.data
);

export const selectNumberPoints = createSelector(
    [selectDataInput], 
    (data) => data.numberPoints
);

export const selectDataType = createSelector(
    [selectDataInput], 
    (data) => data.dataType
);
