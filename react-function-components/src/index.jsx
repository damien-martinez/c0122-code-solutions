import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return (<button>Click Me!</button>);
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const element = <CustomButton />;

const container = document.querySelector('#root');
ReactDom.render(element, container);
