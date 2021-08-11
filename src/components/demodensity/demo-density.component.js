import React from 'react';
import { CanvasJSChart } from "../../lib/canvasjs.react";
import { densityOptions } from './demo-density.utils';

class DemoDensity extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            graphOptions : {},
            densityOptions : {}
        }
    }

    componentDidMount() {
       this.setState({densityOptions: densityOptions});
    }

    render(){
        const { densityOptions } = this.state
        return(
            <div>
                <CanvasJSChart options={densityOptions} /> 
            </div>
        )
    }
}

export default DemoDensity;