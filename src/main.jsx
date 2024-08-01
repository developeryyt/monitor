import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './pages/App.jsx'
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";


const $root = document.getElementById('root')
const Roots = createRoot($root)

const Renderder = (
    <ErrorBoundary
        fallback={<div>Loading...</div>}
    >
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>
)

Roots.render(Renderder)
