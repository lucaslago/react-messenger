import React          from 'react';
import { shallow }    from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme     from 'chai-enzyme';
import Comment        from './Comment.jsx';
chai.use(chaiEnzyme());

describe('Comment', () => {
  const author = 'Tester';
  const text = 'Arroz';
  const boldText = `**${text}**`;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comment author={author}>{boldText}</Comment>);
  });

  it('should have correct css class', () => {
    expect(wrapper.hasClass('comment')).to.equal(true);
  });

  it('should render author heading', () => {
    expect(wrapper).to.contain(
      <h2 className="commentAuthor">
        {author}
      </h2>
    );
  });

  it('should render element for markdown text', () => {
    expect(wrapper).to.contain(
      <span dangerouslySetInnerHTML={{__html: `<p><strong>${text}</strong></p>\n`}}/>
    );
  });

});
