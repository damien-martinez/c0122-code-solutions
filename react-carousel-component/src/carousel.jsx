import React from 'react';
const images = ['../src/images/001.png', '../src/images/004.png', '../src/images/007.png', '../src/images/025.png', '../src/images/039.png'];
function ShowImage(props) {
  const image = images[props.counter];

  return (
      <img className="" src={image} alt=""></img>
  );
}

function CreateIcons(props) {

  if (props.keyTwo === props.counter) {
    return <i className='circle fas fa-circle black'></i>;
  }
  return <i className='circle fas fa-circle'></i>;

}

function RenderIcons(props) {
  const listItems = images.map((image, index) => {
    return (
    <CreateIcons key={index} keyTwo={index} counter={props.counter} />
    );

  });

  return (
    <div className='row justify-center circle-div'>
      {listItems}
    </div>
  );

}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.triggerTimer = this.triggerTimer.bind(this);
  }

  componentDidMount() {
    this.triggerTimer();

  }

  triggerTimer() {
    this.myInterval = setInterval(() => {
      if (this.state.counter < images.length - 1) {
        this.setState({ counter: this.state.counter + 1 });
      } else {
        this.setState({ counter: 0 });
      }
    }, 3000);
  }

  render() {
    const { counter } = this.state;
    return (
      <>

        <div className="container">
          <div className='row space-between'>
            <div className='chev-left-div'>
              <i className='chevron fas fa-chevron-left'></i>
            </div>
            <div className='image-div'>
              <ShowImage counter={counter} />
            </div>
            <div className='chev-right-div'>
              <i className='chevron fas fa-chevron-right'></i>
            </div>
          </div>
        </div>

      <div className='row justify-center circle-div'>
        <RenderIcons counter={counter} />
      </div>
      </>
    );
  }
}
