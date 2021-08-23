import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectDemoGraph = state => state.demograph;


// output selector that uses the input selector to get a piece of the store.
export const selectData = createSelector(
    [selectDemoGraph], 
    (demograph) => demograph.data
    );


export const selectOptions = createSelector(
    [selectDemoGraph], 
    (demograph) => demograph.options
    );

/* export const selectIsDataFetching = createSelector(
    [selectDemoGraph],
    (demograph) => demograph.selectIsDataFetching
)
 */
/* export const selectIsDataLoaded = createSelector(
    [selectDemoGraph],
    (demograph) => !!demograph.data
) */