import React, { Component } from 'react';


class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      <div>Providers: 
        {this.props.providers.map((p) => 
          <div key={p.id}>{p.text}</div>
        )}
      </div>
    );
  }
}

export default App;