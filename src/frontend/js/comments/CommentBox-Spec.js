import React            from 'react';
import {shallow, mount} from 'enzyme';
import {expect}         from 'chai';
import CommentBox       from './CommentBox.jsx';

describe('CommentBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommentBox url="/api/comments" pollInterval={1000}/>)
  });

  it('should render a wrapper div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the correct css class', () => {
    expect(wrapper.hasClass('commentBox')).to.equal(true);
  });

  it('should have a heading', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render CommentList component', () => {
    expect(wrapper.find('CommentList')).to.have.length(1);
  });

  it('should render CommentForm component', () => {
    expect(wrapper.find('CommentForm')).to.have.length(1);
  });

  it('should render with empty comment list state', () => {
    expect(wrapper).state('data').to.have.length(0);
  });

});
