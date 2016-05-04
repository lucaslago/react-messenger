import React        from 'react';
import $            from 'jquery';
import CommentList  from './CommentList';
import CommentForm  from './CommentForm';

export default React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(comments) {
        this.setState({data: comments});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  handleCommentSubmit: function(data) {
    //TODO

  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});
