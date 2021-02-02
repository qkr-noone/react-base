import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Xiao from './Xiao';
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';
import Noodle from './Noodle';
import NoodleHook from './NoodleHook';

class Index extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this)
    this.deleteXiao = this.deleteXiao.bind(this)

    this.state = { value: 1, list: [1, 2, 7, 9] }
  }

  componentWillMount() {
  }

  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('error', err);
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 要求返回一个布尔类型结果, 必须要有返回值，
    // 简单点说，就是返回true，就同意组件更新;返回false,就反对组件更新。
    if (nextProps.content !== this.state.value) {
      return true
    } else {
      return false
    }
  }

  //shouldComponentUpdate返回true才会被执行。
  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  changeValue(e) {
    this.setState({ value: e.target.value })
  }

  deleteXiao(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    console.log('render---组件挂载中---');
    return (
      <>
        <div>1.Initialization</div>
        <div>2.Mounting阶段</div>
        <p>componentWillMount---组件将要挂载到页面的时刻</p>
        <p>render---组件挂载中---</p>
        <p>componentDidMount---组件挂载完成的时刻</p>
        <input value={this.state.value} onChange={this.changeValue} />
        <div>3.Updation阶段</div>
        <p>shouldComponentUpdatae---组件发生改变前执行</p>
        <p>componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行</p>
        <p>render----开始挂载渲染</p>
        <p>componentDidUpdate---组件更新后执行</p>
        {
          this.state.list.map((item, index) => {
            return <Xiao key={index + 'max' + item} deleteXiao={this.deleteXiao} content={item} index={index} />
          })
        }
        <p>子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行</p>
        <p>也就是说这个组件第一次存在于Dom中，函数是不会被执行的; 如果已经存在于Dom中，函数才会被执行。</p>
        <div>4.Unmounting销毁阶段</div>
        <hr />
        <h4>form 表单</h4>
        <Form />
        <TodoList />
        <Noodle></Noodle>
        <NoodleHook></NoodleHook>
        <p>1231212312</p>
      </>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'))