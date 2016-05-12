import React, {Component}   from 'react';
import CommentList          from './commentlist/CommentList.jsx';
import CommentForm          from './commentform/CommentForm.jsx';
import * as service         from './service/service.js';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  loadCommentsFromServer = () => {
    service.getCommentsFromApi(this.props.url).done(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  componentDidMount = () => {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  handleCommentSubmit = (data) => {
    service.createNewComment(this.props.url, data).done(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

CommentBox.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default CommentBox;
