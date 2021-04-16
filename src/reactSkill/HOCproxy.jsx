import React from 'react';

/* 
 * 反向继承
 * 原理就是利用 super 改变改组件的 this 方向,继而就可以在该组件处理容器组件的一些值
 */

const Sixteen = WrappedComponent => {
  return class extends WrappedComponent {
    componentDidMount() {
      this.setState({ baseName: '这是通过反向继承修改后的基础组件名称' })
    }

    render() {
      return super.render();
    }
  }
}

class WrappedComponent extends React.Component {
  state = {
    baseName: '这是基础组件',
  }
  render() {
    const { baseName } = this.state;
    return <div>
      <div>基础组件值为{baseName}</div>
    </div>
  }
}

export default Sixteen(WrappedComponent);