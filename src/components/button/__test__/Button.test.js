// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../Button';

it("renders without crashing", () => 
{
   const div = document.createElement("div");
   ReactDOM.render(<Button label="test label"/>, div);
});