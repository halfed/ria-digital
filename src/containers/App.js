import React from 'react';  
import Nav from '../components/Nav';

class App extends React.Component {  
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="grid-x">
        	<div className="columns small-12">
        		{this.props.children}
        	</div>
        </div>
      </div>
    );
  }
}

export default App;  