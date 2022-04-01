import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      seconds: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetWatch = this.resetWatch.bind(this);

  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
    this.setTimer();

  }

  setTimer() {
    if (this.state.clicked) {
      this.myInterval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.myInterval);

    }
  }

  resetWatch() {
    this.setState({ seconds: 0 });
  }

  render() {
    if (this.state.clicked === true) {
      return (
      <div className='row'>
          <div className='circle' onClick={this.resetWatch}>
          <p className='timer'>{this.state.seconds}</p>
        </div>
        <div className='icon-div'>
          <i className="fa-solid fa-play" onClick={this.handleClick}></i>
        </div>

      </div>
      );
    } else {
      return (
        <div className='row'>
          <div className='circle'>
            <p className='timer'>{this.state.seconds}</p>
          </div>
          <div className='icon-div'>
            <i className="fa-solid fa-pause" onClick={this.handleClick}></i>
          </div>

        </div>
      );

    }
  }

}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
