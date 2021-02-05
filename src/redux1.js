import { combineReducers, crateStore } from 'redux';

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text;
      break;
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color;
      break;
    default:
      break;
  }
}

function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent(content) {
  const contentDOM  = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

renderApp(appState) // 首次渲染页面
dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
renderApp(appState) // 把新的数据渲染到页面上

function visibilityFilter (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return action.filter;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        },
      ]
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) => {
          if (action.index === index) {
            return Object.assign({}, todo, {
              completed: true,
            })
          }
          return todo
        })
    default:
      return state;
  }
}

function todoApp (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

let reducer = combineReducers({ visibilityFilter, todos })
let store = crateStore(reducer)

store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1,
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
})

function toObservable(store) {
  return {
    subscribe({ next }) {
      const unsubscribe = store.subscribe(() => next(store.getState()))
      next(store.getState())
      return { unsubscribe }
    }
  }
}