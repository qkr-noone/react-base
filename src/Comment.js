import React, { Component } from 'react';
import { List } from 'antd';

class Comment extends Component {
  render () {
    return (
      <List >{this.props.comment.username}: {this.props.comment.content}</List>
    )
  }
}

export default Comment;