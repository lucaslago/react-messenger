import React        from 'react';
import {shallow}    from 'enzyme';
import {expect}     from 'chai';
import sinon        from 'sinon';
import * as service from './service/service.js';
import CommentBox   from './CommentBox.jsx';

describe('CommentBox', () => {
  const promiseStub = {
    done: (cb) => {
      cb([{id:1, author: 'mock comment', text:'mock text'}]);
    }
  };
  const commentsApiUrl = '/api/comments';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommentBox url={commentsApiUrl} pollInterval={1000}/>);
  });

  it('should have the correct css class', () => {
    expect(wrapper.hasClass('commentBox')).to.equal(true);
  });

  it('should render heading text', () => {
    expect(wrapper.find('h1').text()).to.equal('Comments');
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

  it('should increase comment amount after retrieving them from API', () => {
    const getCommentsStub = sinon.stub(service, 'getCommentsFromApi').returns(promiseStub);

    wrapper.instance().loadCommentsFromServer();

    expect(wrapper).state('data').to.have.length(1);
    getCommentsStub.calledWithMatch(commentsApiUrl);
    getCommentsStub.restore();
  });

  it('should always retrieve comments after submiting a new one to the API', () => {
    const fakeData = {};
    const createCommentStub = sinon.stub(service, 'createNewComment').returns(promiseStub);

    wrapper.instance().handleCommentSubmit(fakeData);

    expect(wrapper).state('data').to.have.length(1);
    createCommentStub.calledWithMatch(commentsApiUrl, fakeData);
    createCommentStub.restore();
  });

});
