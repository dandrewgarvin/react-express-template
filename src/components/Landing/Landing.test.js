import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './index';

it('should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
});
