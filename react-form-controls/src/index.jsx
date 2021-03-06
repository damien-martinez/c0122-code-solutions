import React from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`The state is: ${this.state.value}`);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

  }
}

ReactDOM.render(
  <Forms />,
  document.querySelector('#root')
);
