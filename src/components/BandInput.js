// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: "",})
  }

  //renderBands = () => { if (this.props.bands.length > 0) { return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)}}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add band" 
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        {/*this.renderBands()*/}
      </div>
    )
  }
}

export default BandInput

/*
import React from 'react';

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;
*/