require('normalize.css/normalize.css');
require('./Main.less');

import React from 'react';
import Test from './Test';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src="" alt="Yeoman Generator" />
        <div className="notice">hello bingxi Please edit <code>src/components/Main.js</code> to get started!</div>
        <Test />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
