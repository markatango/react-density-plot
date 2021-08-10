import React from 'react';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { graphOptions } from './demo-graph.utils';

class DemoGraph extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            options : {}
        }
    }

    componentDidMount() {
       this.setState({options: graphOptions});
    }

    render(){
        const { options } = this.state
        return(
            <div>
                <CanvasJSChart options={options} /> 
            </div>
        )
    }
}

export default DemoGraph;