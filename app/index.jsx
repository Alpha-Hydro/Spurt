import React from 'react';
import ReactDOM from 'react-dom';

import ComingSoon from './components/ComingSoon';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

document.getElementById('app').className = 'valign-wrapper';

ReactDOM.render(
  <ComingSoon />,
  document.getElementById('app')
);
