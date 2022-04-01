import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return (<button>Click Me!</button>);
}

const element = <CustomButton />;

const container = document.querySelector('#root');
ReactDom.render(element, container);
