import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedCount: 0 };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ clickedCount: this.state.clickedCount + 1 });
  }

  render() {
    if (this.state.clickedCount < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickedCount < 6) {
      return <button onClick={this.handleClick} className="blue">Hot Button</button>;
    } else if (this.state.clickedCount < 9) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;

    } else if (this.state.clickedCount < 12) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;

    } else if (this.state.clickedCount < 15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;

    } else if (this.state.clickedCount < 18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;

    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;

    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
