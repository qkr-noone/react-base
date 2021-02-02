import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.less'

class CommentApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp;