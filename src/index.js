import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import App from './routes/App'

const store = createStore(reducer, initialState)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))