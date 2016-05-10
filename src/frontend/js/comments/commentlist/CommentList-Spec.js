import React          from 'react';
import { shallow }    from 'enzyme';
import {expect}       from 'chai';
import CommentList    from './CommentList.jsx';

describe('CommentList', () => {
  const comments = [{id: 1, author: 'author 1', text: 'text 1'},
                    {id: 2, author: 'author 2', text: 'text 2'}];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommentList comments={comments}/>);
  });

  it('should render wrapper div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have correct css class', () => {
    expect(wrapper.hasClass('commentList')).to.equal(true);
  });

  it('should render the correct amount of comments', () => {
    expect(wrapper.find('Comment').length).to.equal(2);
  });


});
