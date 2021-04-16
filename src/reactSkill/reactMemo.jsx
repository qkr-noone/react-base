import React from 'react';

function areEqual(prevProps, nextProps) {
  /*
   如果把 nextProps 传入 render 方法的返回结果与
   将 prevProps 传入 render 方法的返回结果一致则返回 true，
   否则返回 false
  */
  if (prevProps.val === nextProps.val) {
    return true;
  } else {
    return false;
  }
}

// React.memo() 两个参数 第一个是纯函数 第二个是比较纯函数
export default React.memo(function TwentyChild(props) {
  console.log('MemoSon rendered : ' + Date.now());
  return <div>{props.val} React.memo</div>;
}, areEqual)

// class TwentyOneChild extends React.PureComponent { // 组件直接继承React.PureComponent
//   render() {
//     return <div>{this.props.name}</div>
//   }
// }

// export default class TwentyOneChild extends React.Component {
//   render () {
//     return (
//       <div>
//         <TwentyOneChild name={'这是React.PureCompoent的使用方法'}></TwentyOneChild>
//       </div>
//     )
//   }
// }