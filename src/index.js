import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import { UserProvider } from './context/user.context';
// import { CategoriesProvider } from './context/categories.context';
// import { CartProvider } from './context/cart.context';

import {PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {persistor, store} from './store/store'
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      
    <PersistGate persistor={ persistor }></PersistGate>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
