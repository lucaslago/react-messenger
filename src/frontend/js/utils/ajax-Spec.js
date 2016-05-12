import {assert}    from 'chai';
import {get, post} from './ajax';
import sinon       from 'sinon';
import $           from 'jquery';

describe('ajax', () => {
  const testUrl = 'test/url';
  let ajaxStub;

  beforeEach(() => {
    ajaxStub = sinon.stub($, 'ajax');
  });

  afterEach(() => {
    ajaxStub.restore();
  });

  it('should send get with correct settings', () => {
    get(testUrl);
    assert(ajaxStub.calledWithMatch({ url: testUrl, type: 'GET', dataType: 'json'}));
  });

  it('should send post with correct settings', () => {
    const postData = 'whatever';
    post(testUrl, postData);
    assert(ajaxStub.calledWithMatch({ url: testUrl,
                                      data: postData,
                                      type: 'POST',
                                      dataType: 'json'
                                    }));
  });
});
