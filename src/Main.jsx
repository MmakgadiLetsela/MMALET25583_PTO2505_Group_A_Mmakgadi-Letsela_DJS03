/**

    * Entry point for the application, responsible for rendering the root App component to the DOM
    * Ensure the React component mounts and displays properly in the browser.
    * @principle SRP - Single Responsibility Principle: This file is solely responsible for rendering the root component of the application.

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
