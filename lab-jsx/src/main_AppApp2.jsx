import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, App2} from './App.jsx';

/* 8: การใช้งาน State เพื่อจัดการการเปลี่ยนแปลง UI (Using State to Manage UI Changes) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><App /><br /><App2 /></>);