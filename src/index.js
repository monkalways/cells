import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';

const RootHtml = () => (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(<RootHtml />, document.getElementById('root'));
