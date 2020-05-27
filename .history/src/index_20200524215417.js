import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //  React.createElement("h1", null, "Hello"),
  React.createElement("h1", {style: }, "Hello"),
  document.getElementById("root")
);


