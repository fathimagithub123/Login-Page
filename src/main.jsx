import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="979262482298-eimr2lufv82658bud87qqa5n0l6dd7us.apps.googleusercontent.com">  <App /></GoogleOAuthProvider>;
  
  </React.StrictMode>,
)
