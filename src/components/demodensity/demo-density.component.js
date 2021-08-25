import React from 'react';
import { createStructuredSelector } from 'reselect';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { connect } from 'react-redux';

import { selectOptions } from '../../redux/demo-density/demo-density.selectors';
import { getOptionsStart } from '../../redux/demo-density/demo-density.actions';

import { getKDE, extractYFromData } from '../../utils/stat.utils';

class DemoDensity extends React.Component {

    componentDidMount() {
        /* const { getOptionsStart } = this.props;
        getOptionsStart(); */
    }

    render(){
        const { getOptionsStart } = this.props;
        getOptionsStart();
        const { options, data } = this.props;
        options.data[0].dataPoints = getKDE(extractYFromData(data))  ;
        const newOptions = Object.assign({},{...options})
        return(
            <div>
                <CanvasJSChart options={newOptions} /> 
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    options : selectOptions
})

const mapDispatchToProps = dispatch => ({
    getOptionsStart :  () => dispatch(getOptionsStart())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(DemoDensity);