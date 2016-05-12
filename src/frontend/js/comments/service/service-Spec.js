import sinon        from 'sinon';
import {expect}     from 'chai';
import * as ajax    from '../../utils/ajax';
import * as service from './service';

describe('service', () => {
  const commentsApiUrl = 'fake/comments';
  const promiseStub = {
    error: (cb) => {
      expect(cb).to.be.a('function');
    }
  };
  let getStub;
  let postStub;

  beforeEach(() => {
    getStub = sinon.stub(ajax, 'get').returns(promiseStub);
    postStub = sinon.stub(ajax, 'post').returns(promiseStub);
  });

  afterEach(() => {
    getStub.restore();
    postStub.restore();
  });

  it('should get comments from server', () => {
    service.getCommentsFromApi(commentsApiUrl);
    getStub.calledWithMatch(commentsApiUrl);
  });

  it('should post a new comment from server', () => {
    const comment = {};

    service.createNewComment(commentsApiUrl, comment);

    postStub.calledWithMatch(commentsApiUrl, comment);
  });
});
