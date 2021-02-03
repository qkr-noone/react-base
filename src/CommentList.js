import React, { Component } from 'react';
import Comment from './Comment';
import { List } from 'antd';

class CommentList  extends Component {
  /* 给 CommentList 加上 defaultProps 防止 comments 不传入的情况： */
  static defaultProps = {
    comments: []
  }

  constructor () {
    super()
    this.state = {
      standard: [
        'static 开头的类属性，如 defaultProps、propTypes。',
        '构造函数，constructor。',
        'getter / setter。',
        '组件生命周期。',
        '_ 开头的私有方法。',
        '事件监听方法，handle *。',
        'render * 开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render * 开头。',
        'render() 方法。',
      ]
    }
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    const { standard } = this.state
    return (
      <div>
        {
          this.props.comments.map((item, i) =>
            <Comment
              comment={item}
              key={i}
              index={i}
              onDeleteComment={this.handleDeleteComment.bind(this)}
            />
          )
        }
        <h3>另外，组件的内容编写顺序如下：</h3>
        {
          standard.map((val, index) => <List key={index}>{`${index + 1}. ${val}`}</List>)
        }
      </div>
    )
  }
}

export default CommentList ;