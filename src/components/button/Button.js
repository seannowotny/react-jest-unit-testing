// @flow

import * as React from 'react';
import './button.css';

type Props = { label: string };

function Button({ label }: Props): React.Node
{
   return <div data-testid="button" className="button-style">{label}</div>
}

export default Button;