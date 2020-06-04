import React, {Component} from 'react';
import Main from './Components/mainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();
class App extends Component {


  render(){
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
    );
  }
}
export default App;
