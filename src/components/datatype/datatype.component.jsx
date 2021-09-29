import React from 'react';
import { connect } from 'react-redux';
import { getDataStart } from '../../redux/data/data.actions'

class DataTypeSelector extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            datatype:"normal"
            };
        }

  handleChange = (e)=>{
    console.log(`datatype: ${e.target.value}`)
    this.props.getDataStart(e.target.value);
    this.setState({datatype:e.target.value})
    
  }

  render() {
    return (
      <div>
        <h3>Select data distribution type </h3>
         <form>
            <input type="radio" value="uniform" id="uniform"
              onClick={this.handleChange} name="datatype" defaultChecked={this.state.datatype ==="uniform"}/>
            <label form="datatype">Uniform</label>

            <input type="radio" value="normal" id="normal"
              onClick={this.handleChange}  name="datatype" defaultChecked={this.state.datatype ==="normal"}/>
            <label form="datatype">Normal</label>

            <input type="radio" value="poisson" id="poisson"
              onClick={this.handleChange}  name="datatype" defaultChecked={this.state.datatype ==="poisson"}/>
            <label form="datatype">Poisson</label>
         </form>
      </div>
    );
  }


}

const mapDispatchToProps = dispatch => ({
  getDataStart: (graphtype) => dispatch(getDataStart(graphtype))
});  

export default connect(null,mapDispatchToProps)(DataTypeSelector);