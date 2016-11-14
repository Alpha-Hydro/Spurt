import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

document.body.className = 'valign-wrapper';
document.getElementById('app').className = 'valign';

ReactDOM.render(
  <div>Spurt.fi</div>,
  document.getElementById('app')
);
