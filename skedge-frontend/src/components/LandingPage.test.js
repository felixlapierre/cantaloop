import React from 'react';
import LandingPage from './LandingPage';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <LandingPage></LandingPage>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log(tree);

});
