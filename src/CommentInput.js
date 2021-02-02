import React, { Component } from 'react';
import { Form, Input, Button } from 'antd'
import PropTypes from 'prop-types';

class Clock extends Component {
  constructor () {
    super();
    this.state = {
      date: new Date(),
      timer: null,
    }
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount () {
    clearImmediate(this.timer)
  }

  render () {
    const { date } = this.state;
    return (
      `${date}`
    )
  }
}

class CommentInput  extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  constructor () {
    super()
    this.state = {
      username: '',
      content: '',
      isShowClock: true,
    }
  }

  handleName (event) {
    this.setState({
      username: event.target.value,
    })
  };

  handleContent (event) {
    this.setState({
      content: event.target.value,
    })
  };

  handleSumbit () {
    const { username, content } = this.state;
    if (!username && !content) return
    if (!username) return alert('请输入用户名')
    if (!content) return alert('请输入评论内容')
    if (this.props.onSubmit) {
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    return (
      <div className='comment-input'>
        <Form>
          {this.state.isShowClock ? <Clock /> : null}
          <Button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</Button>
          <Form.Item label="用户名">
            <Input placeholder='username' value={this.state.username} onChange={this.handleName.bind(this)} />
          </Form.Item>
          <Form.Item label="信息">
            <Input.TextArea placeholder='userInfo' value={this.state.content} onChange={this.handleContent.bind(this)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.handleSumbit.bind(this)}>发布</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default CommentInput;