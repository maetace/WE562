import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const data = [
  {id:1, val:'aaaa'},
  {id:2, val:'bbbb'},
  {id:3, val:'cccc'}
];

createRoot(document.getElementById('root')).render(
  <DataContext.Provider value={data}>
    <App data={data} />
  </DataContext.Provider>,
);