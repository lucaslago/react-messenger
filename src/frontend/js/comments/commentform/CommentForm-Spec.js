import React          from 'react';
import { shallow }    from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme     from 'chai-enzyme';
import sinon          from 'sinon';
import CommentForm    from './CommentForm.jsx';
chai.use(chaiEnzyme());

describe('CommentForm', () => {
  const onCommentSubmit = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommentForm onCommentSubmit={onCommentSubmit}/>);
  });

  it('should have the correct css class', () => {
    expect(wrapper.hasClass('commentForm')).to.equal(true);
  });

  it('should display an empty author input', () => {
    const emptyInput = (
      <input onChange={wrapper.instance().handleAuthorChange} value={''} type="text" placeholder="Your name"/>
    );
    expect(wrapper.contains(emptyInput)).to.equal(true);
  });

  it('should display an empty text input', () => {
    const emptyTextInput = (
      <input onChange={wrapper.instance().handleTextChange} value={''} type="text" placeholder="Say something..."/>
    );
    expect(wrapper.contains(emptyTextInput)).to.equal(true);
  });

  it('should display a submit button', () => {
    const submitButton = (
      <button onClick={wrapper.instance().handleSubmit} type="submit"> Post </button>
    );
    expect(wrapper.contains(submitButton)).to.equal(true);
  });

  it('should not call onCommentSubmit when button is clicked with empty inputs', () => {
    wrapper.find('button').simulate('click');
    expect(onCommentSubmit.calledOnce).to.equal(false);
  });

  it('should call onCommentSubmit when button is clicked with valid inputs', () => {
    wrapper.setState({author: 'validAuthor', text: '**valid text**'});
    wrapper.find('button').simulate('click');

    expect(onCommentSubmit.calledOnce).to.equal(true);
  });

  it('should update author state when user types in author input', () => {
    const authorInput = 'Lucas';
    wrapper.find('input').at(0).simulate('change', {target: {value: authorInput}});

    expect(wrapper.state('author')).to.equal(authorInput);
  });

  it('should update text state when user types in text input', () => {
    const textInput = '**nice**';
    wrapper.find('input').at(1).simulate('change', {target: {value: textInput}});

    expect(wrapper.state('text')).to.equal(textInput);
  });

});
