import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.less'

class CommentApp extends Component {
  constructor () {
    super();
    this.state = {
      comments: [],
    }
  }
  submit(comment) {
    const { comments } = this.state;
    comments.push(comment)
    this.setState({
      comments,
    })
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.submit.bind(this)}
        />
        <CommentList comments={comments}/>
      </div>
    )
  }
}

export default CommentApp;