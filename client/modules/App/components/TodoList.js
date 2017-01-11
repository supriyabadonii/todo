
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Import Components
import Helmet from 'react-helmet';
export class TodoList extends React.Component {
  render() {
  	console.log(this.props.items)
  	alert(this.props.items)
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
    items: PropTypes.object,
  	
}