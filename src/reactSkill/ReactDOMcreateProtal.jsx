import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const modalRoot = document.body;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.style = {
      width: '200px',
      height: '200px',
      backgroundColor: 'green',
      position: 'absolute',
      top: '200px',
      left: '400px',
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

function Child() {
  return (
    <div className="modal">
      这个是通过ReactDOM.createPortal 创建的内容
      <p>.ReactDOM.createPortal</p>
      <p>作用:组件的render函数返回的元素会被挂载在它的父级组件上,createPortal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案</p>
    </div>
  )
}

export default class TwentyFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>点击加1</Button>
        <p>点击次数： {this.state.clicks}</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}