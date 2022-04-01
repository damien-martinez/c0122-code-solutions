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
    if (this.state.clicked === true) {
      return (
        <div className='container'>
          <div className='row'>
            <i onClick={this.handleClick} className="fa-solid fa-align-justify"></i>
          </div>
          <div className='image-div'>
            <img src="../images/1280px-The_Legend_of_Zelda.svg.png" alt="" />

          </div>
        </div>

      );
    } else {
      return (
        <div className='container'>
          <div onClick={this.handleClick} className='modal-overlay'></div>
          <div className='row hidden'>
            <i className="fa-solid fa-align-justify"></i>
          </div>
          <div className='drawer'>
            <div className='games'>
              <h3 >Choose A Game</h3>
              <div onClick={this.handleClick} className='p-div'>
                <p>The Legend Of Zelda</p>
              </div>
              <div onClick={this.handleClick} className='p-div'>
                <p>A Link To The Past</p>
              </div>
              <div onClick={this.handleClick} className='p-div'>
                <p>Macarena Of Time</p>
              </div>
              <div onClick={this.handleClick} className='p-div'>
                <p>The Wind Walker</p>
              </div>
              <div onClick={this.handleClick} className='p-div'>
               <p>Breath of the Wild</p>
              </div>
            </div>
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
