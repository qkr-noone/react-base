import { createStore } from 'redux'; // 引入 createStore 方法
import reducer from './reducer';
const store = createStore(
    reducer,
    // 创建数据存储仓库 启用 redux devtool 插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store