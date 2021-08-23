import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectGraph = state => state.demograph;

// output selector that uses the input selector to get a piece of the store.
export const selectOptions = createSelector(
    [selectGraph], 
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