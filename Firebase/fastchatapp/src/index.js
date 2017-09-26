import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatApp from './ChatApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();
