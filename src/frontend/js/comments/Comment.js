import React  from 'react';
import marked from 'marked';

const rawMarkup = (htmlString) => {
  const rawMarkup = marked(htmlString, {sanitize: true});
  return { __html: rawMarkup};
};

export default React.createClass({

  render: function() {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={rawMarkup(this.props.children)}/>
      </div>
    );
  }
});
