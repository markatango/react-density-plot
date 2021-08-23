import React from 'react';
import { createStructuredSelector } from 'reselect';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { connect } from 'react-redux';

import { selectOptions } from '../../redux/demo-density/demo-density.selectors';
import { getOptionsStart } from '../../redux/demo-density/demo-density.actions';

class DemoDensity extends React.Component {

    componentDidMount() {
        const { getOptionsStart } = this.props;
        getOptionsStart();
    }

    render(){
        const { options } = this.props;
        return(
            <div>
                <CanvasJSChart options={options} /> 
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