// @flow

import * as React from 'react';
import './button.css';

type Props = { label: string };

function Button({ label }: Props): React.Node
{
   return <div data-testid="button" className="button-style">Hi {label}</div>
}

export default Button;