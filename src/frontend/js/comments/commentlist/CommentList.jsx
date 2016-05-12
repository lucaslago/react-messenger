import React, {Component}   from 'react';
import Comment              from './comment/Comment.jsx';

class CommentList extends Component {

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

CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired
};

export default CommentList;
