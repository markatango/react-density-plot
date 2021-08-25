import React from 'react';
import { createStructuredSelector } from 'reselect';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { connect } from 'react-redux';

import { selectOptions } from '../../redux/demo-graph/demo-graph.selectors';
import { getOptionsStart } from '../../redux/demo-graph/demo-graph.actions';

class DemoGraph extends React.Component {

    componentDidMount() {
        
    }

    render(){
        const { getOptionsStart } = this.props;
        getOptionsStart();
        const { options, data } = this.props;
        options.data[0].dataPoints = data;
        const newOptions = Object.assign({},{...options})
    //
        console.log(newOptions);
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoGraph);