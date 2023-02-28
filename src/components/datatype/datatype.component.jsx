import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataStart, setNumberPoints, setDataType } from '../../redux/data/data.actions'
import { selectDataType, selectNumberPoints } from '../../redux/data/data.selectors';

class DataTypeSelector extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         datatype:"normal"
    //         };
    //     }

  getTheData = () => ({})

  handleChange = (e)=>{
    console.log(`datatype: ${e.target.value}`)
    console.log(`datalength: ${this.props.numberPoints}`)
    this.props.setDataType(e.target.value)
    const datatypeAndLength = {gtype: e.target.value, glength:this.props.numberPoints}
    this.props.getDataStart(datatypeAndLength);
    
  }

  handleNumberPointsChange = (e)=>{
    console.log(`numberOfPoints: ${e.target.value}`)
    this.props.setNumberPoints(e.target.value);
    const datatypeAndLength = {gtype: this.props.dataType, glength:e.target.value}
    this.props.getDataStart(datatypeAndLength);
  }

  render() {
    return (
      <div>
        <h3>Select data distribution type </h3>
        <form>
          <div>
            <input type="radio" value="uniform" id="uniform"
              onClick={this.handleChange} name="datatype" defaultChecked={this.props.dataType ==="uniform"}/>
            <label form="datatype">Uniform</label>
          </div>
            
          <div>
            <input type="radio" value="normal" id="normal"
              onClick={this.handleChange}  name="datatype" defaultChecked={this.props.dataType ==="normal"}/>
            <label form="datatype">Normal</label>
          </div>

          <div>
            <input type="radio" value="poisson" id="poisson"
              onClick={this.handleChange}  name="datatype" defaultChecked={this.props.dataType ==="poisson"}/>
            <label form="datatype">Poisson</label>
          </div>
        </form>

        <form>
            <input type="number" value={this.props.numberPoints} id="numpoints"
              onChange={this.handleNumberPointsChange}  name="numpoints"/>
            <label form="numpoints">Number of points</label>
        </form>

      </div>
    );
  }


}
const mapStateToProps = createStructuredSelector({
  numberPoints: selectNumberPoints,
  dataType: selectDataType
})

const mapDispatchToProps = dispatch => ({
  getDataStart: (datatypeAndLength) => dispatch(getDataStart(datatypeAndLength)),
  setNumberPoints: (numberOfPoints) => dispatch(setNumberPoints(numberOfPoints)),
  setDataType: (type) => dispatch(setDataType(type))
});  

export default connect(mapStateToProps,mapDispatchToProps)(DataTypeSelector);