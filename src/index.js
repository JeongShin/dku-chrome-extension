import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App isExt={false} />,
  document.getElementById('dku_extension'),
);

registerServiceWorker();
