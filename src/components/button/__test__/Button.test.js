// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../Button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => 
{
   const div = document.createElement("div");
   ReactDOM.render(<Button label="test label"/>, div);
});

it("renders button correctly", () =>
{
  const { getByTestId } = render(<Button label="test label"/>);
  expect(getByTestId('button')).toHaveTextContent('test label');
});

it("renders button correctly", () =>
{
  const { getByTestId } = render(<Button label="save"/>);
  expect(getByTestId('button')).toHaveTextContent("save");
});

it("matches snapshot 1", () =>
{
   const tree = renderer.create(<Button label="save"/>).toJSON();
   expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () =>
{
   const tree = renderer.create(<Button label="click me please"/>).toJSON();
   expect(tree).toMatchSnapshot();
});