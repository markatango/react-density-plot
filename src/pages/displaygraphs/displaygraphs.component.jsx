import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectData } from '../../redux/data/data.selectors';
import { getKDE, extractYFromData } from '../../utils/stat.utils';
import { defaultOptions } from './options.default';

import { cloneDeep } from 'lodash';

import  CanvasJSReact  from "../../lib/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DisplayGraphs extends Component {
  constructor(props) {
    super(props);
    this.charts = [];
    this.defaultOptions = defaultOptions;
    
  }

  render() {
    /* const options1 = {
      title: {
        text: this.props.c1Name
      },
      data: [
        {
          type: "line",
          dataPoints: this.props.data
        }
      ]
    };
    const options2 = {
      title: {
        text: this.props.c2Name
      },
      data: [
        {
          type: "line",
          dataPoints: getKDE(extractYFromData(this.props.data))
        }
      ]
    }; */

    const theme = "dark1";
    const markerColor = "yellow"
    const options1 = cloneDeep(this.defaultOptions);
    options1.data[0].dataPoints = this.props.data;
    options1.data[0].type = "scatter";
    options1.data[0].name = "";
    options1.data[0].markerType = "circle";
    options1.title.text = options1.axisY.title = this.props.c1Name
    options1.theme = theme
    options1.data[0].markerColor = markerColor
    options1.data[0].markerBorderColor = "darkblue"
    options1.data[0].markerBorderThickness=  1

    const options2 = cloneDeep(this.defaultOptions);
    options2.data[0].dataPoints = getKDE(extractYFromData(this.props.data));
    options2.data[0].type = "line";
    options2.data[0].name = "";
    options2.data[0].markerType = null;
    options2.title.text = options2.axisY.title = this.props.c2Name
    options2.theme = theme
    options2.data[0].lineColor = markerColor

    var charts = this.charts;
    for (var i = 0; i < charts.length; i++) {
      var chart = charts[i];
        chart.render();
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
         <h2 style={{textAlign: "center"}}>Kernel Density Estimator Demo</h2> 
         </div>
         <div className="col-6">
            <CanvasJSChart
              options={options1}
              onRef={ref => this.charts.push(ref)}
            />
          </div>
         
          <div className="col-2">
            <CanvasJSChart
              options={options2}
              onRef={ref => this.charts.push(ref)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data : selectData
})

export default connect(mapStateToProps, null)(DisplayGraphs); 