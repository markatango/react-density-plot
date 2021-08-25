import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import DemoDensity from '../../components/demodensity/demo-density.component';
import DemoGraph from '../../components/demograph/demo-graph.component';

import { selectData } from '../../redux/demo-display/demo-display.selectors';
import { getDataStart } from '../../redux/demo-display/demo-display.actions'

//import { render } from '@testing-library/react';

class DemoDisplay extends React.Component {

    componentDidMount(){
        const { getDataStart } = this.props;
        getDataStart();
    } 

    render() {
        
        const { data } = this.props;
        return(
            <div>
                <DemoGraph data={data}/>
                <DemoDensity data={data}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    data : selectData
}); 

const mapDispatchToProps = dispatch => ({
    getDataStart :  () => dispatch(getDataStart())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(DemoDisplay);
