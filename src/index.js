import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormProvider } from './context/formcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FormProvider>
    <App />
    </FormProvider>
);

