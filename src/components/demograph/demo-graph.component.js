import React from 'react';
import { createStructuredSelector } from 'reselect';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { connect } from 'react-redux';

import { selectOptions } from '../../redux/demo-graph/demo-graph.selectors';
import { getOptionsStart } from '../../redux/demo-graph/demo-graph.actions';

class DemoGraph extends React.Component {

    componentWillMount() {
        const { getOptionsStart } = this.props;
        getOptionsStart();
    }

    render(){
        const { options } = this.props;
        console.log(options);
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoGraph);