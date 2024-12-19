// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './redux/store'; 

// ReactDOM.render(
//   <Provider store={store}> 
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client'; // שים לב לשינוי כאן
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // השתמש ב-createRoot
root.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// אם אתה רוצה להתחיל למדוד ביצועים באפליקציה שלך, העבר פונקציה
// כדי לרשום תוצאות (לדוגמה: reportWebVitals(console.log))
// או שלח לכתובת ניתוח. למידע נוסף: https://bit.ly/CRA-vitals
reportWebVitals();
