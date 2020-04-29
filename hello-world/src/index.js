import React from 'react';
import ReactDOM from 'react-dom';

function FormatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Greeting(props) {
  if (props.user) {
    return <h1>Hello, {FormatName(props.user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

class HelloWorld extends React.Component {

  render() {
    const user1 = {
      firstName: 'Herr',
      lastName: 'Pinheiro'
    };
    const user2 = null;
    return (
      <div>
        <Greeting user={user1}/>
        <Greeting user={user2}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
