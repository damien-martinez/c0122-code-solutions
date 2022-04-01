import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className='row'>
            <button className="slider green"></button>
          <button onClick={this.handleClick} className="button on-position"></button>
            <p className="on">ON</p>
        </div>
      );
    } else {
      return (
        <div className='row'>
          <button className="slider grey"></button>
          <button onClick={this.handleClick} className="button off-position"></button>
          <p className="on">OFF</p>
        </div>

      );
    }
  }
}

ReactDOM.render(
  <Slider />,
  document.querySelector('#root')
);
