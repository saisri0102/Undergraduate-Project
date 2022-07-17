import React from 'react';
import ReactDOM from 'react-dom';
// import CounterContainer from './containers/CounterContainer'
import Counter from './components/Counter'
//import FormContainer from './containers/FormContainer'
import Form from './components/UserForm'
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    {/*  Provider  makes my store available to all the component inside it  */}
    <Provider store= {store}> 
      <Counter />
      <Form />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

