import React from 'react';
const emptyState = {author: '', text: ''};

export default React.createClass({
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefaut();
    const author = this.state.author.trim(),
          text = this.state.text.trim();
    if(author && text) {
      this.props.onCommentSubmit({author: author, text:text});
      this.setState(emptyState);
    }
  },
  getInitialState: function() {
    return emptyState;
  },
  render: function() {
    const postData = {author: this.state.author, text: this.state.text};
    return (
      <form onSubmit={this.handleSubmit} className="commentForm">
        <input onChange={this.handleAuthorChange} value={postData.author} type="text" placeholder="Your name"/>
        <input onChange={this.handleTextChange} value={postData.text} type="text" placeholder="Say something..."/>
        <input type="submit" value="Post"/>
      </form>
    );
  }
});
