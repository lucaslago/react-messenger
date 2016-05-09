import React              from 'react';
import {renderComponent}  from '../../../utils/test-util';
import Comment            from './Comment.jsx';
import expect             from 'expect';

describe('Comment', () => {
  const author = 'Tester';
  const text = 'Arroz';
  const boldText = `**${text}**`;
  let tree,
      authorHeading,
      commentSpan;

  beforeEach(() => {
    tree = renderComponent(
      <Comment author={author}>{boldText}</Comment>
    );
    authorHeading = tree.props.children[0],
    commentSpan = tree.props.children[1];
  });

  it('should be a div with comment css class', () => {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toBe('comment');
  });

  it('should render author heading with commentAuthor css class', () => {
    expect(authorHeading).toEqual(
      <h2 className="commentAuthor">
        {author}
      </h2>
    );
    expect(authorHeading.props.className).toBe('commentAuthor');
  });

  it('should render a span element for markdown text', () => {
    expect(commentSpan).toEqual(
      <span dangerouslySetInnerHTML={{__html: `<p><strong>${text}</strong></p>\n`}}/>
    );
  });

});
