import React from 'react';
import ReactDOM from 'react-dom';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <div className='container'>
          <div className='row'>
            <i className="fa-solid fa-align-justify"></i>
          </div>
          <div className='image-div'>
            <img src="../images/1280px-The_Legend_of_Zelda.svg.png" alt="" />

          </div>
        </div>

      );
    } else {
      return (
        <div className='container'>
          <div className='modal-overlay'></div>
          <div className='row'>
            <i className="fa-solid fa-align-justify"></i>
          </div>
          <div className='image-div'>
            <img src="../images/1280px-The_Legend_of_Zelda.svg.png" alt="" />

          </div>
        </div>

      );

    }
  }
}

ReactDOM.render(
  <Drawer />,
  document.querySelector('#root')
);
