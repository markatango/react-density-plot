import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectDemoDensity = state => state.demodensity;


// output selector that uses the input selector to get a piece of the store.
export const selectData = createSelector(
    [selectDemoDensity], 
    (demodensity) => demodensity.data
    );


export const selectOptions = createSelector(
    [selectDemoDensity], 
    (demodensity) => demodensity.options
    );

/* export const selectIsDataFetching = createSelector(
    [selectDemoDensity],
    (demodensity) => demodensity.selectIsDataFetching
)
 */
/* export const selectIsDataLoaded = createSelector(
    [selectDemoDensity],
    (demodensity) => !!demodensity.data
) */