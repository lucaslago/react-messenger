import React        from 'react';
import CommentList  from './commentlist/CommentList.jsx';
import CommentForm  from './commentform/CommentForm.jsx';
import {get, post}  from '../utils/ajax';

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  loadCommentsFromServer = () => {
    const promise = get(this.props.url);

    promise.done(function(data) {
      this.setState({data: data});
    }.bind(this));

    promise.error(function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this));
  }

  componentDidMount = () => {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  handleCommentSubmit = (data) => {
    const promise = post(this.props.url, data);

    promise.done(function(data) {
      this.setState({data: data});
    }.bind(this));

    promise.error(function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
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

export default CommentBox;
