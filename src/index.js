import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './Context/AuthContext';
import { ChatContextProvider } from './Context/ChatContext';
import Inputs from './Components/Inputs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
  <React.StrictMode>
   <App/>
  </React.StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
);
reportWebVitals();
