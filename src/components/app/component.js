import React, { Component } from 'react';
import injectSheet from 'react-jss'
import styles from './styles'


class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      <div className={this.props.sheet.classes.title}>
        Providers: 
        {this.props.providers.map((p) => 
          <div key={p.id}>{p.text}</div>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(App);