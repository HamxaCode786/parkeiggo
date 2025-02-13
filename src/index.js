import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormDataProvider  } from './context/formcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FormDataProvider >
    <App />
    </FormDataProvider >
);

