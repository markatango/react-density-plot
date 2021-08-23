import { createSelector } from 'reselect';

// input selector returns a piece of state from root-reducer combiner
const selectDensity = state => state.demodensity;

// output selector that uses the input selector to get a piece of the store.
export const selectOptions = createSelector(
    [selectDensity], 
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