/* 
 * HOC Component
 */
import React from 'react';

// 属性代理
const Seventeen = WrappedComponent => 
  class extends React.Component {
    render () {
      const props = {
        ...this.props,
        name: 'This is HOC',
      };
      return <WrappedComponent {...props} />;
    }
  };

class WrappedComponent extends React.Component {
  state = {
    baseName: 'This is Base Component',
  }

  render () {
    const { baseName } = this.state;
    const { name } = this.props;
    return <div>
      <div>base component value {baseName}</div>
      <div>HOC component props proxy value {name}</div>
    </div>
  }
}

export default Seventeen(WrappedComponent);