import React     from 'react';
import TestUtils from 'react-addons-test-utils';

export function renderComponent(component) {
  const shallowRenderer = TestUtils.createRenderer();
  return shallowRenderer.render(component);
}
