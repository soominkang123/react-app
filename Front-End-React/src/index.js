import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 모든 페이지에서 라우팅 처리를 할 수 있도록 BroweserRouter 컴포넌트로 App을 감싸줌
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> : 작동이 2번되니까 제거 

  <BrowserRouter>

    <App />
  
  </BrowserRouter>
  
  
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
