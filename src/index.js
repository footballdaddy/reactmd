import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import './index.css';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Notifications />,
  document.getElementById('root')
);
