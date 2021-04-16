import ReactDom from 'react-dom';

class Dialog {
  constructor(name) {
    this.div = document.createElement('div');
    this.div.style = {
      width: '200px',
      height: '200px',
      backgroundColor: 'green',
      position: 'absolute',
      top: '200px',
      left: '400px',
    }
    this.div.id = 'dialog-box';
  }

  show(children) {
    // 销毁
    const dom = document.querySelector('#dialog-box');
    if (!dom) {
      // 显示
      document.body.appendChild(this.div);
      ReactDom.render(children, this.div);
    }
  };

  destroy() {
    // 销毁
    const dom = document.querySelector('#dialog-box');
    if (dom) { // 兼容多次点击
      ReactDom.unmountComponentAtNode(this.div);
      dom.parentNode.removeChild(dom);
    }
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  show: function(children) {
    new Dialog().show(children);
  },
  hide: function() {
    new Dialog().destroy();
  }
};