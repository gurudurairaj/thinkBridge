import { configureStore } from '@reduxjs/toolkit';
import {reducer as Restaurants} from './home';

const store = configureStore({
    reducer:{
       home:Restaurants,
    }
});
  
  export default store;