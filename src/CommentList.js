import React, { Component } from 'react';
import Comment from './Comment';

class CommentList  extends Component {
  /* 给 CommentList 加上 defaultProps 防止 comments 不传入的情况： */
  static defaultProps = {
    comments: []
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((item, i) => <Comment comment={item} key={i} />)
        }
      </div>
    )
  }
}

export default CommentList ;