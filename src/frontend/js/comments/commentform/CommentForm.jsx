import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value});
  }

  handleTextChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = () => {
    const author = this.state.author.trim(),
          text = this.state.text.trim();
    if(author && text) {
      this.props.onCommentSubmit({author: author, text: text});
      this.setState({author: '', text: ''});
    }
  }

  render() {
    const postData = {author: this.state.author, text: this.state.text};
    return (
      <div className="commentForm">
        <input onChange={this.handleAuthorChange} value={postData.author} type="text" placeholder="Your name"/>
        <input onChange={this.handleTextChange} value={postData.text} type="text" placeholder="Say something..."/>
        <button onClick={this.handleSubmit} type="submit"> Post </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onCommentSubmit: React.PropTypes.func.isRequired
};

export default CommentForm;
