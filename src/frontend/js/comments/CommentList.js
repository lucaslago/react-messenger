import React   from 'react';
import Comment from './Comment';

export default React.createClass({
  render: function() {
    const commentNodes = this.props.comments.map((c) => {
      return <Comment key={c.id} author={c.author}>{c.text}</Comment>;
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
