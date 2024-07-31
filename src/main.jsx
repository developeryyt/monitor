import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './pages/App.jsx'
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter as Router} from "react-router-dom";


const $root = document.getElementById('root')
const Roots = createRoot($root)

const Renderder = (
    <ErrorBoundary
        fallback={<div>Loading...</div>}
    >
        <Router>
            <App />
        </Router>
    </ErrorBoundary>
)

Roots.render(Renderder)
