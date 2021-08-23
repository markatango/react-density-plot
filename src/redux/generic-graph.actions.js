import { demoGraphTypes } from './demo-graph.types';
import { getData } from '../../utils/stat.utils';

export const getDataAction = (len, dataType) => ({
    type: demoGraphTypes.GET_DATA,
    payload: getData(len, dataType)
});



