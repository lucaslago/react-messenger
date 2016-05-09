import React              from 'react';
import {renderComponent}  from '../../../utils/test-util';
import CommentList        from './CommentList.jsx';
import expect             from 'expect';

describe('CommentList', () => {
  const fakeComments = [{id: 1, author: 'author 1', text: 'text 1'},
                        {id: 2, author: 'author 2', text: 'text 2'}];
  let tree,
      actualComments;
  beforeEach(() => {
    tree = renderComponent(
      <CommentList comments={fakeComments}/>
    );
    actualComments = tree.props.children;
  });

  it('should be a div', () => {
    expect(tree.type).toBe('div');
  });

  it('should have commentList css class', () => {
    expect(tree.props.className).toBe('commentList');
  });

  it('should render the correct amount of comments', () => {
    expect(actualComments.length).toEqual(fakeComments.length);
  });


});
