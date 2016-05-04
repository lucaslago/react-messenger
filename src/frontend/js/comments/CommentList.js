import React   from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const commentNodes = this.props.comments.map((c) => {
      return <Comment key={c.id} author={c.author}>{c.text}</Comment>;
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
