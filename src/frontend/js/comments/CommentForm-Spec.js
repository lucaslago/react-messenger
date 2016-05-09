import React              from 'react';
import {renderComponent}  from '../../../utils/test-util';
import CommentForm        from './CommentForm.jsx';
import expect             from 'expect';

describe('CommentForm', () => {
  const onCommentSubmit = () => {
    return true;
  };
  let tree,
      authorInput,
      textInput,
      submitInput;
  beforeEach(() => {
    tree = renderComponent(
      <CommentForm onCommentSubmit={onCommentSubmit}/>
    );
    authorInput = tree.props.children[0],
    textInput   = tree.props.children[1],
    submitInput = tree.props.children[2];
  });

  it('should be a form', () => {
    expect(tree.type).toBe('form');
  });

  it('should have commentForm css class', () => {
    expect(tree.props.className).toBe('commentForm');
  });

  it('should display an author input', () => {
    expect(authorInput.props.type).toBe('text');
    expect(authorInput.props.value).toBe('');
    expect(authorInput.props.placeholder).toBe('Your name');
  });

  it('should display a text input', () => {
    expect(textInput.props.type).toBe('text');
    expect(textInput.props.value).toBe('');
    expect(textInput.props.placeholder).toBe('Say something...');
  });

  it('should display an input button', () => {
    expect(submitInput.props.type).toBe('submit');
    expect(submitInput.props.value).toBe('Post');
  });

  // it('should update state on typing', () => {
  //   const author = 'new author';
  //   const text = 'new text';
  //   authorInput.props.onChange({preventDefault: () => {}});
  //   expect(authorInput.props.value).toBe(author);
  // });
});
