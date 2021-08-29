import React from 'react';

class DataTypeSelector extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gender:""
            };
        }

    handleChange=(e)=>{
        this.setState({
          gender: e.target.value
        })
    }

  render() {
    return (
      <div>
         <form>
            <input type="radio" value="uniform" id="uniform"
              onChange={this.handleChange} name="datatype" />
            <label form="uniform">Uniform</label>

            <input type="radio" value="normal" id="normal"
              onChange={this.handleChange} name="datatype"/>
            <label form="normal">Normal</label>
         </form>

         <p>`Your gender is: {this.state.gender}`</p>
      </div>
    );
  }
}

export default DataTypeSelector;