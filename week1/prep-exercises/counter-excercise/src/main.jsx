import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from "./counter.jsx";

const rootContainer = document.getElementById('root');

const root = ReactDOM.createRoot(rootContainer);
root.render(<Counter />);