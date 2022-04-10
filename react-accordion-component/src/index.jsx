import React from 'react';
import ReactDOM from 'react-dom';

const languagesArr = [
  { id: '1', title: 'Hypertext Markup Language', description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.' },
  { id: '2', title: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents.' },
  { id: '3', title: 'JavaScript', description: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites." }
];

function Item(props) {
  return (
      <div>
        <h1 onClick={() => { props.handleClick(props.value.id); }} className="language">{props.value.title}</h1>
        {props.clicked === props.value.id && (
          <p className='description'>{props.value.description}</p>
        )}
      </div>
  );

}

class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: '0'
    };
    // this.languages = props.languages;

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(key) {
    // console.log(key);
    if (key !== this.state.clickedItem) {
      this.setState({ clickedItem: key });
    } else {
      this.setState({ clickedItem: '0' });
    }
  }

  render() {
    return (
    <div>
      {this.props.languages.map(language =>
      <Item key={language.id} value={language} clicked={this.state.clickedItem} handleClick={this.handleClick}/>
      )}
    </div>
    );
  }
}

ReactDOM.render(
  <Languages languages={languagesArr} />,
  document.getElementById('root')
);
