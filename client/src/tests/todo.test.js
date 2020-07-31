/* eslint-disable no-unused-expressions */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import ToDoItem from '../components/toDoItem';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders content', () => {
  const todo = {
    name: 'Build to do app',
    completed: true,
  };

  const component = render(<ToDoItem todo={todo} />);

  expect(component.container).toHaveTextContent('Build to do app');
});

test('clicking the button calls event handler once', () => {
  const todo = {
    name: 'Build to do app',
    completed: true,
  };

  const mockHandler = jest.fn();

  const component = render(<ToDoItem todo={todo} onClick={mockHandler} />);

  const button = component.getByTestId('toggle-done');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});

test('clicking the remove from list button works', () => {
  const todo = {
    name: 'Build to do app',
    completed: false,
  };

  const mockHandler = jest.fn();

  const component = render(<ToDoItem todo={todo} onRemoveClick={mockHandler} />);

  const button = component.getByTestId('delete');
  fireEvent.click(button);

  expect(component).toBeNull;
});
