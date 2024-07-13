import './App.css';
import store from './store';
import Router from './routing';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import Header from './pages/header';
function App() {
  return (
    <BrowserRouter>
          <Provider store={store}> 
          <Header  />
          <Router/>
          </Provider>
    </BrowserRouter>
  );
}

export default App;
